import { Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, EyeIcon, Image, Text, } from '@gluestack-ui/themed';
import { LOG } from '../config/logger';


const { width, height } = Dimensions.get('window');

const MovieDetailScreen = ({ route }: any) => {
    const { filmItem } = route.params;
    const [isTruncated, setIsTruncated] = useState(true);
    const roundedNumber = parseFloat(filmItem.item.vote_average.toFixed(1))

    useEffect(() => {
        LOG.info(filmItem, 'item')
    }, [])


    const seeMore = () => {
        setIsTruncated(!isTruncated);
    }



    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <Box h={200}>
                <Image
                    w={'$full'}
                    h={height * 0.6}
                    source={{
                        uri: filmItem.item?.poster_path ? `https://image.tmdb.org/t/p/w500${filmItem.item?.poster_path}` : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80',
                    }}
                    alignSelf='center'
                    resizeMode='contain'
                    alt='miniature example'
                    role='presentation'
                />
            </ Box >
            <Box style={{ marginTop: height * 0.35, marginBottom: 200 }}>
                <Text fontWeight='900' fontStyle='italic' color='#fff' fontSize='$2xl' p='$4' mt='$2'>{filmItem.item.title}</Text>
                <Box flexDirection='row' alignItems='center' >
                    <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4' p='$1'>
                        <Text color='#fff' mx='$4' fontWeight='900' p='$2' fontSize={'$xl'}>{roundedNumber}/10</Text>
                    </Box>
                    <Text color='#fff' fontWeight='800'>Rating</Text>
                    <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4' p='$1'>

                    </Box>
                    <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4' p='$1'>

                    </Box>
                    <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4' p='$1'>

                    </Box>
                </Box>
                <Box mx='$4' mt='$4'>
                    <Text mb='$4' color={'$blue700'} fontWeight='800'>Release date : {filmItem.item.release_date}</Text>
                    <Text color='#fff' fontFamily='$heading' numberOfLines={isTruncated ? 2 : undefined}>
                        {filmItem.item.overview}
                    </Text>
                    {isTruncated && (
                        <Text mb='$4' color='#fff' fontWeight='800' onPress={seeMore} textAlign='right'>See more</Text>
                    )}
                </Box>
            </Box >
        </ ScrollView >
    );
}

export default MovieDetailScreen;
