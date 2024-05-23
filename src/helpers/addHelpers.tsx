import { LOG } from "../config/logger";
import { Movie } from "../types/movieInterface";

const API_URL_CREATE_MOVIE = "http://192.168.1.180:3000/api/movies/createMovie";
const API_URL_ADD_COMMENT = "http://192.168.1.180:3000/api/movies/addComment";
const API_URL_RATE_MOVIE = "http://192.168.1.180:3000/api/movies/rateMovie";

export const createMovie = async (movie: Movie) => {
  try {
    LOG.debug("entro correctamente al createMovie", movie);
    const resp: any = await fetch(API_URL_CREATE_MOVIE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const data: any = await resp.json();

    LOG.error(data)
    return data;
  } catch (error) {
    LOG.error(`Error in registerUser: ${error}`);
  }
};

// export const addComment = async () => {};

// export const rateMovie = async () => {};

// export const checkIfMovieExists = async (movie: Movie) => {};
