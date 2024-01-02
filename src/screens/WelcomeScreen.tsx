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
    <Box w="$full" flex={1} bgColor="#fff">
      <Swiper
        style={{ height: Height / 1.6, backgroundColor: "#fff" }}
        autoplay={false}
        showsPagination={true}
        activeDotColor="#7f1d1d"
        dotColor="#666"
        paginationStyle={{ bottom: Height * 0.1, position: "absolute" }}
        showsButtons={false}
      >
        <Box>
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            w={Width}
            h={Height * 0.4}
            alt="welcome image"
            role="presentation"
          />
          <Box justifyContent="center" alignItems="center" mx="$12">
            <Text fontSize={"$md"} color="#000">
              Welcome to
            </Text>
            <Heading fontSize={"$3xl"} bold color="#000">
              Central Film
            </Heading>
            <Text textAlign="center" color="#777">
              Discover and share a constantly Expanding mix of movies.
            </Text>
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center">
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            w={Width}
            h={Height * 0.4}
            alt="welcome image"
            role="presentation"
          />
          <Text fontSize={"$md"} color="#fff">
            Welcome to
          </Text>
          <Heading fontSize={"$3xl"} bold color="#fff">
            Central Film
          </Heading>
        </Box>
        <Box justifyContent="center" alignItems="center">
          {/* <Text>Hello Swiper</Text> */}
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            w={Width}
            h={Height * 0.4}
            alt="welcome image"
            role="presentation"
          />
          <Text fontSize={"$md"} color="#fff">
            Welcome to
          </Text>
          <Heading fontSize={"$3xl"} bold color="#fff">
            Central Film
          </Heading>
        </Box>
        {/* Remaining slides */}
      </Swiper>
      {/* <LottieView
        autoPlay
        loop={false}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
        source={require("../../assets/lottie/cinema.json")}
      /> */}
      <Button
        bgColor="$red900"
        mx="$10"
        rounded={"$full"}
        bottom={Height * 0.07}
      >
        <ButtonText>Login</ButtonText>
      </Button>
      <Text textAlign="center" bottom={Height * 0.07}>
        Continue as guest
      </Text>
    </Box>
  );
};

export default WelcomeScreen;
