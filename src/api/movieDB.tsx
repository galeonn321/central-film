import axios from "axios";
import { API_KEY_MOVIES_TMDb } from "@env";
import { LOG } from "../config/logger";

const APIKEY = process.env.API_KEY_MOVIES_TMDb;


const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: APIKEY,
    language: "en-US"
  },
});


export default movieDB;
