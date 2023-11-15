import MovieCard from "../movieCard/movieCard";
import './movieGrid.css'


export default function MovieGrid({ movieList }) {
  return (
    <div className="mGrid">
      {movieList.map((movie) => (
        <MovieCard 
        key={movie.id} 
        {...movie} />
      ))}
    </div>
  )
}