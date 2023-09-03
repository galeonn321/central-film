
import { Box, Heading, Image, Pressable, Text } from '@gluestack-ui/themed'
import { FlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { LOG } from '../../config/logger'
import { ActivityIndicator } from 'react-native'


type Item = {
    item: {
        id: number,
        title: string,
        poster_path: string
    }
}

const PlayingNowComponent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [films, setFilms] = useState([])


    useEffect(() => {

    }, [])


    const renderItem = (item: Item, index: number) => {
        LOG.info(typeof item)
        const uri = `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`
        return (
            <Pressable
                onPress={() => {
                    // navigator.navigate("Details", { id: item.item?.id });
                    LOG.info(item.item?.id)
                }}
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
            {isLoading ? <ActivityIndicator size="large" color="#fff" /> :
                <Box>
                    <FlashList
                        data={films}
                        horizontal
                        renderItem={renderItem as any}
                        estimatedItemSize={200}
                    />
                </Box>
            }
        </Box>
    )
}

export default PlayingNowComponent