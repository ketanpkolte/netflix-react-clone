const API_KEY = "02cb5799474bdb1dd3ec216d87526384";

const requests = {
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
}

export default requests;