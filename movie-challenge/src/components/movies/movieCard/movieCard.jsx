import './movieCard.css'

// eslint-disable-next-line react/prop-types
export default function MovieCard() {
	// const { poster_path, title, release_date } = movie;
  return (
		<div className='movieCard'>
      <img 
        className="poster"
        src="https://www.themoviedb.org/t/p/original//2ah8fNJFZVU3vcXhU5xfAYi2eym.jpg" 
        alt='Casper' 
      />
      <div className="movie-details">
        <p>1995</p>
        <h2>Casper</h2>
      </div>
		</div>
  );
}

