import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlayingNowComponent from "../components/carouselComponent/CarouselComponent";
import { LOG } from "../config/logger";
import SearchContent from "../components/searchContent/SearchContent";
import { Image, Box } from "@gluestack-ui/themed";


const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#000' }}>
      <Box alignSelf="center">
        <Image
          source={require('../../assets/images/icon.png')}
          alt='miniature example'
          size="xs"
          rounded={"$full"}
          alignSelf="center"
          mb='$4'
          mt='$2'
          role="presentation"
        />
        <SearchContent />
      </ Box >
    </ ScrollView>
  );
};

export default HomeScreen;
