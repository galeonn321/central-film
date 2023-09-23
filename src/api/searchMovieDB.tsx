import axios from "axios";
import { API_KEY_MOVIES_TMDb } from "@env";
import { LOG } from "../config/logger";

const APIKEY = process.env.API_KEY_MOVIES_TMDb;

const tmdbAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

const searchMovieDB = async (query: string) => {
    try {
        const response = await tmdbAPI.get('/search/movie', {
            params: {
                api_key: APIKEY,
                query: query,
            },
        });

        if (response.status === 200) {
            return response.data.results;
        } else {
            throw new Error('API request failed with status:', response.status as any);
        }
    } catch (error: any) {
        throw new Error('API request error:', error);
    }
}
// const searchMovieDB = axios.create({
//     baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`,
//     params: {
//         api_key: APIKEY,
//         language: "en-US",
//     },
// });


export default searchMovieDB;
