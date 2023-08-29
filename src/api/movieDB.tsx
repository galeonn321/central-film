import axios from "axios";
import { API_KEY_MOVIES_TMDb } from "@env";

const APIKEY = process.env.API_KEY_MOVIES_TMDb;

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  params: {
    api_key: APIKEY,
    language: "en-US",
    page: 1,
    include_adult: false,
  },
});

export default movieDB;
