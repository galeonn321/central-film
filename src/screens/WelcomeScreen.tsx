import { Box } from "@gluestack-ui/themed";
import React, { useEffect, useRef } from "react";
import { Dimensions, View, Text } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";
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
    <Box w="$full" h={windowHeight} bgColor="$white">
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#000",
        }}
        source={require("../../assets/lottie/cinema.json")}
      />
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper2</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper3</Text>
        </View>
        {/* Remaining slides */}
      </Swiper>
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
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
