// import { useEffect } from "react";

// // const options = {
// //     method: 'GET',
// //     headers: {
// //       accept: 'application/json',
// //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2I1YmUyM2E4MjgxZjgyMzMxM2M2YjJmOGEzMDE3YiIsInN1YiI6IjY1MjZjNWFiMGNiMzM1MTZmZWM1ZTMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vojxTpiRS_OLhxNAm-eEE55TVNXppnpjldXitazcUeQ'
// //     }
// //   };
  
// //   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// function GetMovieInfo() {

//   const fetchMovie = () => {
//     fetch('https://api.themoviedb.org/3/discover/movie?api_key=a3b5be23a8281f823313c6b2f8a3017b')
//     .then(res => res.json())
//     .then(json => console.log(json))
//   }

//   useEffect(() => {
//     fetchMovie()
//   },[])
// }

// export {GetMovieInfo}