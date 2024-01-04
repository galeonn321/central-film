import { Dimensions, ImageBackground, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { LOG } from "../config/logger";
import Icon from "react-native-vector-icons/Ionicons";
import { FlashList } from "@shopify/flash-list";
import CommentItem from "../components/commentSectionComponent/CommentItem";
import FilmCommentInput from "../components/filmCommentInput/FilmCommentInput";

const { width, height } = Dimensions.get("window");

const MovieDetailScreen = ({ route }: any) => {
  const { filmItem } = route.params;
  const [isTruncated, setIsTruncated] = useState(true);
  const roundedNumber = parseFloat(filmItem.item.vote_average.toFixed(1));
  const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77];

  // useEffect(() => {
  //   LOG.info(filmItem, "item");
  // }, []);

  const seeMore = () => {
    setIsTruncated(!isTruncated);
  };

  const renderItem = () => {
    return <CommentItem />;
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <Box h={200}>
        <Image
          w={"$full"}
          h={height * 0.6}
          source={{
            uri: filmItem.item?.poster_path
              ? `https://image.tmdb.org/t/p/w500${filmItem.item?.poster_path}`
              : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1728&q=80",
          }}
          alignSelf="center"
          resizeMode="contain"
          alt="miniature example"
          role="presentation"
        />
      </Box>
      <Box style={{ marginTop: height * 0.35, marginBottom: 200 }}>
        <Text
          fontWeight="900"
          textAlign="center"
          fontStyle="italic"
          color="#fff"
          fontSize="$2xl"
          p="$4"
          mt="$10"
        >
          {filmItem.item.title}
        </Text>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mb="$6"
        >
          <Box
            bgColor="$darkBlue800"
            rounded="$full"
            flexDirection="row"
            mx="$3"
            p="$3"
          >
            <Icon name={"thumbs-up-outline"} size={32} color={"#fff"} />
          </Box>
          <Box
            bgColor="$darkBlue800"
            rounded="$full"
            flexDirection="row"
            mx="$3"
            p="$3"
          >
            <Icon name={"thumbs-down-outline"} size={32} color={"#fff"} />
          </Box>
          <Box
            bgColor="$darkBlue800"
            rounded="$full"
            flexDirection="row"
            mx="$3"
            p="$3"
          >
            <Icon name={"heart-outline"} size={32} color={"#fff"} />
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" mx="$4" mb="$2">
          <Text color="#fff" fontWeight="800" fontSize={"$xl"}>
            IMDB Rating
          </Text>
          <Box
            bgColor="$darkBlue800"
            rounded="$full"
            flexDirection="column"
            mx="$3"
            p="$2"
          >
            <Text color="#fff" mx="$4" fontWeight="900" p="$2" fontSize={"$xl"}>
              {roundedNumber}/10
            </Text>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center" mx="$4">
          <Text color="#fff" fontWeight="800" fontSize={"$xl"}>
            Central Film Rating
          </Text>
          <Box
            bgColor="$darkBlue800"
            rounded="$full"
            flexDirection="column"
            mx="$3"
            p="$2"
          >
            <Text color="#fff" mx="$4" fontWeight="900" p="$2" fontSize={"$xl"}>
              {roundedNumber}/10
            </Text>
          </Box>
        </Box>
        <Box mx="$4" mt="$4">
          <Text mb="$4" color={"$blue700"} fontWeight="800">
            Release date : {filmItem.item.release_date}
          </Text>
          <Text
            color="#fff"
            fontFamily="$heading"
            numberOfLines={isTruncated ? 2 : undefined}
          >
            {filmItem.item.overview}
          </Text>
          {isTruncated && (
            <Text
              mb="$4"
              color="#fff"
              fontWeight="800"
              onPress={seeMore}
              textAlign="right"
            >
              See more
            </Text>
          )}
        </Box>
        <Box mx="$4" pt="$6" minHeight={200}>
          <FilmCommentInput />
          <Text color="#fff" fontWeight="$bold" fontSize={"$xl"}>
            Comments (1)
          </Text>
          <FlashList
            data={Data}
            renderItem={CommentItem}
            estimatedItemSize={250}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default MovieDetailScreen;
