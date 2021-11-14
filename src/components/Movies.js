import { useEffect, useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./MoviesTable";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import _ from "lodash";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn,setSortColumn]=useState({path:"",order:""});
  const [selectedGenre, setSelectedGenre] = useState({});
  const handleDelete = (id) => {
    setMovies((prev) => {
      return prev.filter((m) => m._id !== id);
    });
  };

  const handleLike = (movie) => {
    setMovies((prev) => {
      const temp = [...prev];
      const index = temp.indexOf(movie);
      temp[index] = { ...temp[index] };
      temp[index].liked = !temp[index].liked;
      return temp;
    });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };
  const handleSort=(sortColumn)=>{

  setSortColumn(sortColumn);
  }
  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);
  const getPagedData=()=>{
    const filtered =selectedGenre && selectedGenre._id? movies.filter((m) => m.genre._id === selectedGenre._id)
    : movies;
  const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order])

 
const pagedMovies = paginate(sorted, currentPage, pageSize);
return [pagedMovies,filtered.length ];

}
if(movies.length<1)
return <p>NoMovieFound</p>
 const [pagedMovies,count]=getPagedData();
  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
          items={genres}
        />
      </div>
      <div className="col">
        {movies.length > 0 && (
          <p>There are total {count} movies in Database</p>
        )}
        <MoviesTable sortColumn={sortColumn} onSort={handleSort} onDelete={handleDelete} items={pagedMovies} onLike={handleLike}/>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          itemsCount={count}
          frameSize={pageSize}
        />
      </div>
    </div>
  );
};
export default Movies;
