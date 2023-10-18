import React from 'react';



		export default function MovieCard() {
			return (
				<div className='movieCard'>
					<img src={`https://image.tmdb.org/t/p/w500${img.poster_path}`} alt={movie.title} />
					<div className="movie-details">
						<h2>{movie.title}</h2>
						<p>Release Date: {movie.release_date}</p>
					</div>
				</div>
			);
		}
		

// export default function MovieCard({}) {
// 	// const { poster_path, title, release_date } = movie;
//   return (
// 		<div className='movieCard'>
// 			MOVIE
// 			<img src={`https://image.tmdb.org/t/p/w500${results[0].poster_path}`} alt={options.title} />
//       <div className="movie-details">
//         <h2>{options.title}</h2>
//         <p>Release Date: {options.release_date}</p>
//       </div>
// 		</div>
//   );
// }

