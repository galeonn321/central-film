import React, { useState, useEffect } from 'react'
import movieDB from '../api/movieDB';
import { LOG } from '../config/logger';

const useMovieDB = ({ path }: any) => {
    LOG.debug(path, 'path')
    const [films, setFilms] = useState<Object>({});


    const getFilms = async () => {
        const resp = await movieDB.get(path);
        LOG.info(resp.data.results, 'this is from the PlayingNowComponent')
        setFilms(resp.data.results)
    }



    useEffect(() => {
        getFilms();
    }, []);

    return [films, setFilms]
}

export default useMovieDB