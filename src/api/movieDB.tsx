import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  params: {
    api_key: "a3e9f5f1c0e8a9f0f9b1b9f0f9b1b9f0",
    language: "en-US",
    page: 1,
    include_adult: false,
  },
});

export default movieDB;
