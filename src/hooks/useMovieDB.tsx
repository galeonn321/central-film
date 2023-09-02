import React, { useState, useEffect } from 'react'
import movieDB from '../api/movieDB';
import { LOG } from '../config/logger';

const useMovieDB = ({ path }: String) => {
    LOG.debug(path, 'path')
    const [films, setFilms] = useState<Object>({});

    useEffect(() => {
        movieDB.get(`${path}`).then(
            (response) => {
                LOG.warn(response.data.results, 'HAHAHAHAH');
                setFilms(response.data.results);
            }
        ).catch(
            (error) => {
                LOG.error(error, ' HAHAHA');
            }
        ).finally(
            () => {
                LOG.info('finally');
            }

        );

    }, []);

    return [films, setFilms]
}

export default useMovieDB