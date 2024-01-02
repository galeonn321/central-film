import {
  Box,
  Button,
  ButtonText,
  Heading,
  Image,
  Text,
} from "@gluestack-ui/themed";
import React, { useEffect, useRef } from "react";
import { Dimensions, View } from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
import LottieView from "lottie-react-native";
import Swiper from "react-native-swiper";

const WelcomeScreen = () => {
  const firstAnimationRef = useRef<LottieView | null>(null);
  const secondAnimationRef = useRef<LottieView | null>(null);

  useEffect(() => {
    // Play the first animation when the component mounts
    firstAnimationRef.current?.play();
  }, []);

  return (
    <Box w="$full" flex={1} bgColor="#000">
      <Swiper
        style={{ height: Height / 1.6, backgroundColor: "#000" }}
        autoplay={true}
        showsPagination={true}
        activeDotColor="#7f1d1d"
        dotColor="#666"
        paginationStyle={{ bottom: Height * 0.12, position: "absolute" }}
        showsButtons={false}
      >
        <Box>
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/camera-film.jpg")}
            resizeMode="cover"
            w={Width}
            h={Height * 0.5}
            alt="welcome image"
            role="presentation"
            bgColor="#fff"
          />
          <Box justifyContent="center" alignItems="center" mx="$12">
            <Text fontSize={"$lg"} color="#fff" mt={"$4"}>
              Welcome to
            </Text>
            <Heading fontSize={"$6xl"} bold color="#fff" pt={"$8"}>
              Central Film
            </Heading>
            <Text textAlign="center" color="#777" mt={"$2"} fontSize={"$xl"}>
              Discover and share a constantly Expanding mix of movies.
            </Text>
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center">
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/controller-tv.jpg")}
            resizeMode="cover"
            w={Width}
            h={Height * 0.5}
            alt="welcome image"
            role="presentation"
          />
          <Text fontSize={"$lg"} color="#fff" mt={"$2"}>
            Real
          </Text>
          <Heading fontSize={"$6xl"} bold color="#fff" pt={"$8"}>
            Reviews
          </Heading>
          <Text textAlign="center" color="#777" mt={"$1"} fontSize={"$xl"}>
            find out what people are saying about your favorite movies and write
            your honest opinion without filters.
          </Text>
        </Box>
        <Box justifyContent="center" alignItems="center">
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/entrance-cinema.jpg")}
            resizeMode="cover"
            w={Width}
            h={Height * 0.5}
            alt="welcome image"
            role="presentation"
          />
          <Text fontSize={"$lg"} color="#fff" mt={"$2"}>
            Quick search for
          </Text>
          <Heading fontSize={"$6xl"} bold color="#fff" pt={"$8"}>
            Films & Series
          </Heading>
          <Text textAlign="center" color="#777" mt={"$1"} fontSize={"$xl"}>
            Don't know what to watch? Search for your favorite films and series,
            read the reviews and make your choice.
          </Text>
        </Box>
        {/* Remaining slides */}
      </Swiper>
      <Button
        bgColor="$red900"
        mx="$10"
        rounded={"$full"}
        bottom={Height * 0.08}
      >
        <ButtonText bold>Login</ButtonText>
      </Button>
      <Text textAlign="center" bold bottom={Height * 0.07}>
        Continue as guest
      </Text>
    </Box>
  );
};

export default WelcomeScreen;
