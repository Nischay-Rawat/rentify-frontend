import { Link } from "react-router-dom";
import Like from "./common/Like";

import Table from "./common/Table";

const MoviesTable = ({ items, onDelete, onLike, onSort, sortColumn }) => {
  const columns = [
    { path: "title", label: "Title"  ,content:movie=><Link style={{textDecoration:'none'}}to={`${movie._id}`}>{movie.title}</Link>},
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table className="Table"
   columns={columns} onSort={onSort} sortColumn={sortColumn} 

        items={items}
     
        onLike={onLike}
        onDelete={onDelete}
    />
  );
};
export default MoviesTable;
