import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlayingNowComponent from "../components/carouselComponent/CarouselComponent";
import { LOG } from "../config/logger";
import SearchContent from "../components/searchContent/SearchContent";
import { Image, Box, Button, ButtonText } from "@gluestack-ui/themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';
import { Text } from "@gluestack-ui/themed";
import { getTokenFromUser } from "../services/user.services";
// import LottieView from "lottie-react-native";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    getTokenFromUser();
  
    LOG.info()
  }, [])
  

  return (
    <ScrollView
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#000" }}
    >
      <Box>
        <Box alignSelf="center">
          
        </Box>
        <SearchContent />
        <Text>queso</Text>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
