import { Box, Heading, Image, Pressable, Text } from '@gluestack-ui/themed'
import { FlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { LOG } from '../../config/logger'
import { ActivityIndicator } from 'react-native'
import movieDB from '../../api/movieDB'
import { MovieDBNowPlaying } from '../../types/movieInterface'
import useMovieDB from '../../hooks/useMovieDB'


type Item = {
    item: {
        id: number,
        title: string,
        poster_path: string
    }
}

const PlayingNowComponent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [getFilms, setGetFilms] = useMovieDB<string>({ path: '/now_playing' })


    LOG.debug(getFilms, 'this is from the PlayingNowComponent')



    const renderItem = (item: Item, index: number) => {
        LOG.info(typeof item)
        const uri = `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`
        return (
            <Pressable
                onPress={() => {
                    // navigator.navigate("Details", { id: item.item?.id });
                    LOG.info(item.item?.id)
                }}
                minHeight={200}
            >
                <Image
                    size={'2xl'}
                    borderRadius={32}
                    source={{ uri: uri ?? '' }}
                    resizeMode="cover"
                    mx="$4"
                    sx={{ ":pressed": { backgroundColor: "#fff" } }}
                />
                <Text color="#fff" mx="$4" mt='$4' italic fontWeight="700" fontSize={'$xl'} py={'$2'} maxWidth={'$72'}>
                    {item.item?.title}
                </Text>
            </Pressable>
        );
    };

    return (
        <Box>
            <Heading
                color="#fff"
                textAlign="center"
                p={"$2"}
                fontWeight="$extrabold"
                fontSize={"$3xl"}
            >
                Playing now
            </Heading>
            <Box minHeight={200} >
                <FlashList
                    data={getFilms}
                    horizontal
                    renderItem={renderItem as any}
                    estimatedItemSize={200}
                />
            </Box>
            {/* <ActivityIndicator size="large" color="#fff" /> */}
            {/* {isLoading ?  : * /}

            {/* } */}
        </Box>
    )
}

export default PlayingNowComponent