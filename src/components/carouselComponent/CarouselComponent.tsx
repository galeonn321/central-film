import { Box, Heading, Image, Pressable, Text } from '@gluestack-ui/themed'
import { FlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { LOG } from '../../config/logger'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import movieDB from '../../api/movieDB'
import useMovieDB from '../../hooks/useMovieDB'

const { height, width } = Dimensions.get("screen");


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
        // LOG.info(item)
        const uri = `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`
        return (
            <Pressable
                onPress={() => {
                    // navigator.navigate("Details", { id: item.item?.id });
                    LOG.info(item.item?.id)
                }}
                h='$32'
                w='$32'
            >
                <Image
                    size={'full'}
                    borderRadius={32}
                    source={{ uri: uri ?? '' }}
                    resizeMode="cover"
                    mx="$4"
                    sx={{ ":pressed": { backgroundColor: "#fff" } }}
                    alt='miniature example'
                    role='presentation'
                />
                <Text color="#fff" mx="$4" mt='$4' italic fontWeight="700" fontSize={'$xl'} py={'$2'} maxWidth={'$72'}>
                    {item.item?.title}
                </Text>
            </Pressable>
        );
    };

    return (
        <Box style={{ minHeight: 2, minWidth: 2, height: 200, width: 200 }}>
            {isLoading ? <Box>
                <FlashList
                    data={getFilms as any}
                    renderItem={renderItem as any}
                    estimatedItemSize={120}
            estimatedListSize={{ height: 120, width: width }}
                    horizontal
                />
            </Box> : <ActivityIndicator size="large" color="#fff" />
            }
        </Box>
    )
}

export default CarouselComponent