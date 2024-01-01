import { Box } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Swiper from "react-native-swiper";
import { LOG } from "../config/logger";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Image } from "react-native-svg";

const WelcomeScreen = () => {
  const animationRef = React.useRef<LottieView | null>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <Box w="$full" h={windowHeight} bgColor="$white">
      <LottieView
        autoPlay
        ref={animationRef}
        style={{
          width: 300,
          height: 300,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/lottie/cinema-roll.json")}
      />
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <LottieView
            autoPlay
            ref={animationRef}
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#eee",
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../assets/lottie/cinema-roll.json")}
          />
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7777",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
