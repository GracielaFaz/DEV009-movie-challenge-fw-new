import {useEffect, useState} from 'react';
import MovieCard from "../movieCard/movieCard";
import './movieGrid.css'


function GetMovieInfo() {

  const [movieList, setMovieList] = useState([]);

  const fetchMovie = async () => {
    await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a3b5be23a8281f823313c6b2f8a3017b')
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }

  useEffect(() => {
    fetchMovie()
  },[])

  return movieList;
}

export default function MoviesGrid() {
  const movieList = GetMovieInfo()
  return (
    <div className="mGrid">
      {movieList.map((movie,index) =>(
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  )
}