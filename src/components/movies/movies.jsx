import { useState, useEffect } from 'react';
import MoviesGrid from './MoviesGrid';
import Pagination from './Pagination';

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Función para obtener películas de la API
  const fetchMovies = async (page) => {
    try {
        const response =  await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a3b5be23a8281f823313c6b2f8a3017b');
        const data = await response.json();
        setMovieList(data.results);
        setTotalPages(data.total_pages);
      } catch(error) {
        console.error('Error fetching data: ', error)
      }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <MoviesGrid movieList={movieList} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Movies;
