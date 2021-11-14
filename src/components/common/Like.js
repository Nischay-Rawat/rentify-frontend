const Like = (props) => {
  let classes = "fa fa-heart";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={props.liked ? classes : classes + "-o"}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
