import React, { useEffect, useState } from 'react';
import { Box, Heading, Input, InputField, InputIcon, Pressable, Text, Image } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/Ionicons";
import { LOG } from '../../config/logger';
import searchMovieDB from '../../api/searchMovieDB';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';
import MyStack from '../../navigators/MainNavigator';

const SearchContent = () => {
    const navigator = useNavigation();
    const [inputText, setInputText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const movieSearch = async () => {
        try {
            // setIsLoading(true);
            const results = await searchMovieDB(inputText);
            setSearchResults(results);
            // setIsLoading(false);
        } catch (error: any) {
            setError(error);
        }
    }

    useEffect(() => {
        movieSearch();
    }, [inputText]);

    // useEffect(() => {
    //     if (searchResults.length > 2) {
    //         LOG.debug(searchResults.length)
    //     } else {
    //         LOG.info(searchResults.length)
    //     }
    // }, [searchResults]);

    const renderItem = (item: any, index: any) => {
        LOG.info(typeof item.item.poster_path, ' HAHAHAHAHAH')

        const uri = item.item?.poster_path ? `https://image.tmdb.org/t/p/w500${item.item?.poster_path}` : 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80';
        return (
            <Pressable
                onPress={() => navigator.navigate("DetailMovie")}
                minHeight={200}
                height={400}
            >
                <Text color="#fff" mx="$4" mt='$4' italic fontWeight="700" fontSize={'$xl'} py={'$2'} maxWidth={'$72'}>
                    {item.item?.title}
                </Text>
                <Image
                    height={300}
                    size={'2xl'}
                    borderRadius={32}
                    source={{
                        uri: uri
                    }}
                    resizeMode="cover"
                    mx="$4"
                    sx={{ ":pressed": { backgroundColor: "#fff" } }}
                />
            </Pressable >
        );
    };

    return (
        <Box bgColor="$black">
            <Heading
                color="#fff"
                textAlign="center"
                p={"$2"}
                fontWeight="$extrabold"
                fontSize={"$3xl"}
                mx='$12'
            >
                type the film you are looking for..
            </Heading>
            <Input
                bgColor="#707070"
                borderColor="#000"
                borderWidth={1}
                borderRadius={12}
                mx="$4"
                my="$4"
            >
                <InputIcon pl="$3">
                    <Icon name={'search-outline'} size={20} color={"#fff"} />
                </InputIcon>
                <InputField onChangeText={(text) => setInputText(text)} value={inputText} color="#fff" placeholder="film, actor, director" />
            </Input>
            <Text color='$amber300'>{inputText}</Text>
            {/* {isLoading ?  */}

            <Box minHeight={200} h={800}>
                <FlashList
                    data={searchResults as any}
                    renderItem={renderItem as any}
                    estimatedItemSize={200}
                />
            </Box>

        </Box>
    )
}

export default SearchContent;