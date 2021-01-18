const  APIKEY = "9aab18c94e42d7e7657b4d08b6db3173";

const requests = {
    fetchTreding: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetFlixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;