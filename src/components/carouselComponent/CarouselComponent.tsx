import {
  Box,
  Heading,
  Image,
  Pressable,
  Spinner,
  Text,
} from "@gluestack-ui/themed";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { LOG } from "../../config/logger";
import { ActivityIndicator, Dimensions, View } from "react-native";
import movieDB from "../../api/movieDB";
import useMovieDB from "../../hooks/useMovieDB";

const { height, width } = Dimensions.get("screen");

type Item = {
  item: {
    id: number;
    title: string;
    poster_path: string;
  };
};

const CarouselComponent = ({ path }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [getFilms, setGetFilms] = useMovieDB({ path: path });

  //   LOG.debug(getFilms, 'this is from the PlayingNowComponent')

  const renderItem = (item: Item, index: number) => {
    // LOG.info(item);
    const uri = `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`;
    return (
      <Pressable
        onPress={() => {
          // navigator.navigate("Details", { id: item.item?.id });
          LOG.info(item.item?.id);
        }}
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
          py={"$2"}
          maxWidth={"$72"}
        >
          {item.item?.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <Box>
      {!isLoading ? (
        <Spinner size="large" />
      ) : (
        <Box height={height / 2.3}>
          <FlashList
            data={getFilms as any}
            renderItem={renderItem as any}
            estimatedItemSize={height / 2.3}
            estimatedListSize={{ height: height / 2.3, width: width }}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </Box>
      )}
    </Box>
  );
};

export default CarouselComponent;
