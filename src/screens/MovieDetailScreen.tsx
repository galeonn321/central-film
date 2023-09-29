import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Image, Text, } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LOG } from '../config/logger';


const MovieDetailScreen = ({ route }: any) => {
    const { item } = route.params;
    const insets = useSafeAreaInsets();
    const roundedNumber = parseFloat(item.item.vote_average.toFixed(1))

    useEffect(() => {
        LOG.info(item.item.vote_average, 'item')
    }, [])




    return (
        <ScrollView style={{ paddingTop: insets.top, backgroundColor: '#000' }}>
            <Box bgColor='$red.100' w='$full' h={400}>
                <Image
                    w={'$full'}
                    h={'$96'}
                    source={{
                        uri: item.item?.poster_path ? `https://image.tmdb.org/t/p/w500${item.item?.poster_path}` : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80',
                    }}
                    alignSelf='center'
                    resizeMode='cover'
                />
            </ Box >
            <Text fontWeight='700' fontStyle='italic' color='#fff' fontSize='$4xl' p='$4' mt='$1'>{item.item.title}</Text>
            <Box flexDirection='row' alignItems='center' >
                <Box bgColor='$darkBlue800' rounded='$full' flexDirection='row' mx='$4'>
                    <Text color='#fff' mx='$4' fontWeight='900' fontSize={'$2xl'} p='$2'>{roundedNumber}</Text>
                </Box>
                <Text color='#fff'>Rating</Text>
            </Box>
        </ ScrollView>
    );
}

export default MovieDetailScreen