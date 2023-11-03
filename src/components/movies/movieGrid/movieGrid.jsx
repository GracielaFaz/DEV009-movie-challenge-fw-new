import {useEffect, useState} from 'react';
import MovieCard from "../movieCard/movieCard";
import './movieGrid.css'


function GetMovieInfo() {

  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPages] = useState(1)

  const fetchMovie = async () => {
    try {
      const response =  await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a3b5be23a8281f823313c6b2f8a3017b');
      const data = await response.json();
      setMovieList(data.results);
      setTotalPages(data.total_pages);
    } catch(error) {
      console.error('Error fetching data: ', error)
    }
   

  }

  useEffect(() => {
    fetchMovie()
  },[]);

  return movieList;
}

export default function MoviesGrid() {
  const movieList = GetMovieInfo()
  return (
    <div className="mGrid">
      {movieList.map((movie, id) => (
        <MovieCard key={id} {...movie} />
      ))}
    </div>
  )
}