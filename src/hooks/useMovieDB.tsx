import React, { useState, useEffect } from 'react'
import movieDB from '../api/movieDB';
import { LOG } from '../config/logger';
import { Movie } from '../types/movieInterface';

const useMovieDB = ({ path }: any) => {
    LOG.debug(path, 'path hahaha')
    const [films, setFilms] = useState<object>({});


    const getFilms = async () => {
        const resp = await movieDB.get(path);
        // LOG.info(resp.data.results, 'this is from the PlayingNowComponent')
        setFilms(resp.data.results)
    }



    useEffect(() => {
        getFilms();
    }, []);

    return [films, setFilms]
}

export default useMovieDB