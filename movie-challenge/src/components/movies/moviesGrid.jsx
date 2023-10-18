import MovieCard from "../movieCard";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2I1YmUyM2E4MjgxZjgyMzMxM2M2YjJmOGEzMDE3YiIsInN1YiI6IjY1MjZjNWFiMGNiMzM1MTZmZWM1ZTMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vojxTpiRS_OLhxNAm-eEE55TVNXppnpjldXitazcUeQ'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export default function MoviesGrid() {
  return (
    <div className="grid">
      <MovieCard 
       img = {options.poster_path}
        
      
      />
    </div>
  )
}