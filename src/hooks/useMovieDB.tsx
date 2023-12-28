import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { LOG } from '../config/logger';
import { Movie } from '../types/MovieInterface';

const useMovieDB = (path: string) => {
  const [films, setFilms] = useState<Movie[] | undefined>(undefined);

  const getFilms = async () => {
    try {
      const resp = await movieDB.get(path);
      LOG.info(resp.data.results.length, 'this is from the PlayingNowComponent');
      setFilms(resp.data.results);
    } catch (error) {
      // Handle error if needed
      LOG.error('Error fetching films:', error);
    }
  };

  useEffect(() => {
    getFilms();
  }, [path]); // Include 'path' in the dependency array to re-fetch when it changes

  return films;
};

export default useMovieDB;
