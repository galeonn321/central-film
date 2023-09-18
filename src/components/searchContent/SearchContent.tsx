import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, Heading, Input, InputField, InputIcon } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/Ionicons";
import { LOG } from '../../config/logger';
import useSearchMovieDB from '../../hooks/useSearchMovieDB';

const SearchContent = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [getFilms, setGetFilms] = useSearchMovieDB({ path: search })

    const searchForFilm = (text: string) => {
        setSearch(text);
    }

    useEffect(() => {
        LOG.error(search)
    }, [search])



    return (
        <Box bgColor="$black">
            <Heading
                color="#fff"
                textAlign="center"
                p={"$2"}
                fontWeight="$extrabold"
                fontSize={"$3xl"}
                mx='$24'
            >
                Search and see how good the film is
            </Heading>
            <Input
                bgColor="#707070"
                borderColor="#000"
                borderWidth={1}
                borderRadius={12}
                mx="$4"

            >
                <InputIcon pl="$3">
                    <Icon name={'search-outline'} size={20} color={"#fff"} />
                </InputIcon>
                <InputField onChangeText={searchForFilm} color="#fff" placeholder="film, actor, director" />
            </Input>
        </Box>
    )
}

export default SearchContent;