import {
  Box,
  HStack,
  Image,
  Pressable,
  Spinner,
  Text,
} from "@gluestack-ui/themed";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { LOG } from "../../config/logger";
import { Dimensions } from "react-native";
import useMovieDB from "../../hooks/useMovieDB";
import Icon from "react-native-vector-icons/Ionicons";
import { Movie } from "../../types/MovieInterface";

const { height, width } = Dimensions.get("screen");

type CarouselComponentProps = {
  path: string;
};

const CarouselComponent: React.FC<CarouselComponentProps> = ({ path }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const films = useMovieDB(path); // useMovieDB returns Movie[] | undefined directly

  //   LOG.debug(getFilms, 'this is from the PlayingNowComponent')

  // useEffect(() => {
  //   // You might want to set isLoading based on the presence of films
  //   setIsLoading(!films);
  // }, [films]);

  const renderItem = ({ item }: { item: Movie }, index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    const roundedNumber = parseFloat(item.vote_average.toFixed(1))
    return (
      <Pressable
        onPress={() => {
          // navigator.navigate("Details", { id: item.item?.id });
          LOG.info(item);
        }}
      >
        
        <Image
          height={height / 3.05}
          width={width / 2.1}
          rounded={'$2xl'}
          source={{
            uri: uri,
          }}
          resizeMode="contain"
          alt="miniature example"
          ml="$2"
          role="presentation"
          sx={{ ":pressed": { backgroundColor: "#fff" } }}
        />
        <Text
          color="#fff"
          italic
          fontWeight="700"
          textAlign="center"
          fontSize={"$xl"}
          py={"$2"}
          maxWidth={"$56"}
        >
          {item.title}
        </Text>
        <HStack position="absolute" w={50} h={30} top={10} right={15} bgColor={'$red900'} alignItems="center" justifyContent="center" rounded={'$xl'}>
          <Icon name={"star"} color={'yellow'}/> 
          <Text color="#fff" bold>{roundedNumber}</Text>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Box>
      {isLoading ? (
        <Spinner size="large" />
      ) : (
        <Box height={height / 2.3}>
          <FlashList
            data={films}
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
