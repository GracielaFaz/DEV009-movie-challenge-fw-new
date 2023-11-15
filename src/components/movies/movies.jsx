import { useState, useEffect } from 'react';
import MovieGrid from './movieGrid/movieGrid';
import Pagination from './pagination/pagination';

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Función para obtener películas de la API
  const fetchMovies = async () => {
    try {
        const response =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a3b5be23a8281f823313c6b2f8a3017b&page=${currentPage}`);
        const data = await response.json();
        setMovieList(data.results);
      } catch(error) {
        console.error('Error fetching data: ', error)
      }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);



  return (
    <div>
      <MovieGrid movieList={movieList} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        movieListLength={movieList.length}
      />
    </div>
  );
}

export default Movies;
