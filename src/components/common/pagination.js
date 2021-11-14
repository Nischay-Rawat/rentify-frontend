import _ from 'lodash'
import PropTypes from 'prop-types'


const Pagination=(props)=>{
    const pageCount=props.itemsCount/props.frameSize;
     if(pageCount<=1)
    return null;
    const pages = _.range(1,pageCount+1);
    return (

    <nav aria-label="Page navigation example">
    <ul className="pagination">
    { pages.map(m=><li  key={m} className={`page-item ${props.currentPage===m?'active':""}`}><a onClick={()=>props.onPageChange(m)} className="page-link " href="#">{m}</a></li>)  
}
     
    </ul>
  </nav>)
};
Pagination.propTypes={
  
    itemsCount:PropTypes.number.isRequired,
    frameSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired

}

export default Pagination;