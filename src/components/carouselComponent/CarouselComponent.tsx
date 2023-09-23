import { Box, Heading, Image, Pressable, Text } from '@gluestack-ui/themed'
import { FlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { LOG } from '../../config/logger'
import { ActivityIndicator } from 'react-native'
import movieDB from '../../api/movieDB'
import useMovieDB from '../../hooks/useMovieDB'


type Item = {
    item: {
        id: number,
        title: string,
        poster_path: string
    }
}

const CarouselComponent = ({ path }: any) => {
    const [isLoading, setIsLoading] = useState(true)
    const [getFilms, setGetFilms] = useMovieDB({ path: path })


    // LOG.debug(getFilms, 'this is from the PlayingNowComponent')



    const renderItem = (item: Item, index: number) => {
        LOG.info(item)
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
            {isLoading ? <Box minHeight={200} >
                <FlashList
                    data={getFilms as any}
                    horizontal
                    renderItem={renderItem as any}
                    estimatedItemSize={200}
                />
            </Box> : <ActivityIndicator size="large" color="#fff" />
            }
        </Box>
    )
}

export default CarouselComponent