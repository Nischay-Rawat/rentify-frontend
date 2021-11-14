import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const Table=({sortColumn,columns,items,onLike,onDelete,onSort})=>{

return (<table className="table">
<TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
<TableBody
  items={items}
  columns={columns}
  onLike={onLike}
  onDelete={onDelete}
/>
</table>)
}
export default Table