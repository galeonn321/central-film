import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  InputField,
  InputIcon,
  Pressable,
  Text,
  Image,
  Spinner,
  Divider,
} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { LOG } from "../../config/logger";
import searchMovieDB from "../../api/searchMovieDB";
import { FlashList } from "@shopify/flash-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import { Movie } from "../../types/movieInterface";

const { height, width } = Dimensions.get("screen");

const SearchContent = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [inputText, setInputText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const movieSearch = async () => {
    try {
      setIsLoading(true);
      const results = await searchMovieDB(inputText);
      setSearchResults(results);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    movieSearch();
  }, [inputText]);

  // useEffect(() => {
  //   // if (searchResults.length > 2) {
  //   //     LOG.debug(searchResults.length)
  //   // } else {
  //   //     LOG.info(searchResults.length)
  //   // }
  //   // LOG.error(searchResults.length)
  //   // LOG.error(inputText);
  // }, [inputText]);

  const renderItem = (item: any, index: any) => {
    const uri = item.item?.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`
      : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80";

    return (
      <Pressable
        onPress={() =>
          navigation.navigate("DetailMovie", {
            filmItem: item,
          })
        }
      >
        <Image
          height={300}
          size={"2xl"}
          borderRadius={32}
          source={{
            uri: uri,
          }}
          resizeMode="cover"
          alt="miniature example"
          mx="$4"
          role="presentation"
          sx={{ ":pressed": { backgroundColor: "#fff" } }}
        />
        <Text
          color="#fff"
          mx="$4"
          italic
          fontWeight="700"
          textAlign="center"
          fontSize={"$2xl"}
          py={"$6"}
          maxWidth={"$72"}
        >
          {item.item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <Box bgColor="#000" flex={1} mb="$56">
      <Heading
        color="#fff"
        textAlign="center"
        p={"$2"}
        fontWeight="$extrabold"
        fontSize={"$3xl"}
        mx="$12"
      >
        type the film you are looking for..
      </Heading>
      <Input
        bgColor="#707070"
        borderColor="#fff"
        borderWidth={1}
        borderRadius={"$full"}
        mx="$4"
        my="$2"
        alignItems="center"
      >
        <InputIcon p="$3" ml={"$2"} mt="$1" alignSelf="center">
          <Icon name={"search-outline"} size={20} color={"#fff"} />
        </InputIcon>
        <InputField
          onChangeText={(text: string) => setInputText(text)}
          value={inputText}
          color="#fff"
          placeholder="Titanic, Frozen, Eyes Wide Shut.."
          selectionColor={"#fff"}
        />
        {inputText.length > 0 && (
          <Pressable onPress={() => setInputText("")}>
            <InputIcon p="$4" alignSelf="center" mr={"$1.5"}>
              <Icon name={"close-outline"} size={30} color={"#fff"} />
            </InputIcon>
          </Pressable>
        )}
      </Input>
      {isLoading ? (
        <Box
          w="$32"
          h="$32"
          alignSelf="center"
          alignItems="center"
          justifyContent="center"
          mt="$12"
          minHeight={"$10"}
        >
          <Spinner size={"large"} />
        </Box>
      ) : (
        <Box h={height / 2.2}>
          <FlashList
            data={searchResults as any}
            horizontal
            renderItem={renderItem as any}
            estimatedItemSize={350}
            estimatedListSize={{ height: 350, width: width }}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchContent;
