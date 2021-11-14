const ListGroup = (props) => {
  const { items, textProperty, selectedItem, valueProperty } = props;
  return (
      
    <ul className="list-group">
      {items.map((m) => (
    
        <li
          style={{ cursor: "pointer" }}
          key={m[valueProperty]}
          onClick={() => props.onItemSelect(m)}
          className={`list-group-item ${m === selectedItem ? "active" : ""}`}
        >
          
          {m[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
