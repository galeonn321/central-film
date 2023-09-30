import { Dimensions, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Image, Text, } from '@gluestack-ui/themed';
import { LOG } from '../config/logger';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');


const MovieDetailScreen = ({ route }: any) => {
    const { item } = route.params;
    const roundedNumber = parseFloat(item.item.vote_average.toFixed(1))


    useEffect(() => {
        LOG.info(item.item, 'item')
    }, [])






    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <Box h={200}>
                <Image
                    w={'$full'}
                    h={height * 0.6}
                    source={{
                        uri: item.item?.poster_path ? `https://image.tmdb.org/t/p/w500${item.item?.poster_path}` : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80',
                    }}
                    alignSelf='center'
                    resizeMode='contain'
                />

            </ Box >
            <BlurView tint='dark' style={{ marginTop: height * 0.35, marginBottom: 200 }}>
                <Text fontWeight='700' fontStyle='italic' color='#fff' fontSize='$4xl' p='$4' mt='$1'>{item.item.original_title}</Text>
                <Box flexDirection='row' alignItems='center' >
                    <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4' p='$2'>
                        <Text color='#fff' mx='$4' fontWeight='900' p='$2'>{roundedNumber}/10</Text>
                    </Box>
                    <Text color='#fff' fontWeight='800'>Rating</Text>
                </Box>
                <Box mx='$4' mt='$4'>
                    <Text mb='$4' color='#fff' fontWeight='800'>Release date : {item.item.release_date}</Text>
                    <Text color='#fff' fontFamily='$heading'>
                        {item.item.overview}
                    </Text>
                </Box>
            </BlurView>
        </ ScrollView>
    );
}

export default MovieDetailScreen