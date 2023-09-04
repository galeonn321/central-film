import React, { useState, useEffect } from 'react'
import movieDB from '../api/movieDB';
import { LOG } from '../config/logger';
import searchMovieDB from '../api/searchMovieDB';

const useMovieDB = ({ path }: any) => {
    LOG.debug(path, 'path hahaha')
    const [films, setFilms] = useState<Object>({});


    const getFilms = async () => {
        const resp = await searchMovieDB.get(path);
        LOG.info(resp.data.results, 'this is from the searchMovieDB')
        setFilms(resp.data.results)
    }



    useEffect(() => {
        getFilms();
    }, []);

    return [films, setFilms]
}

export default useMovieDB