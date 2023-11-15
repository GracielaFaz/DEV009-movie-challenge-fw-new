import './movieCard.css'

export default function MovieCard({ title, release_date, poster_path}) {
  return (
		<div className='movieCard'>
      <img 
        className="poster"
        src={`https://www.themoviedb.org/t/p/original/${poster_path}`}
        alt= {title} 
      />
      <div className="movie-details">
        <p>{release_date.slice(0,4)}</p>
        <h2>{title}</h2>
      </div>
    
		</div>
  );
}

