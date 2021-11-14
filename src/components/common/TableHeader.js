const TableHeader=({onSort,sortColumn,columns})=>{
    const raiseSort=(path)=>{
        const sortee={...sortColumn}
          if(sortee.path===path){
            sortee.order=sortee.order==='asc'?'desc':'asc';
      
          }else{
            sortee.path=path;
            sortee.order='asc'
          } 
          onSort(sortee);
      } 
      const renderSortIcon =(column)=>{
        if(sortColumn.path!==column.path) return null;
        if(sortColumn.order==='asc') return <i className='fa fa-sort-asc'></i>
         return <i className='fa fa-sort-desc'></i>
      }
      return ( 
          <thead>
              <tr>
                  {columns.map(m=><th key={m.key||m.label}onClick={()=>raiseSort(m.path)}>{m.label} {renderSortIcon(m)}</th>)}
                
              </tr>
          </thead>
          
      )

}
export default TableHeader