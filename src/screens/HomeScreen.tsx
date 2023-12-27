import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlayingNowComponent from "../components/carouselComponent/CarouselComponent";
import { LOG } from "../config/logger";
import SearchContent from "../components/searchContent/SearchContent";
import { Image, Box, Button, ButtonText } from "@gluestack-ui/themed";
import { StackNavigationProp } from '@react-navigation/stack';



const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();


  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#000' }}>
      <Button
        onPress={() => navigation.replace("LoginScreen")}
      >
        <ButtonText>LoginScreen</ButtonText>
      </Button>
      <Button
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <ButtonText>RegisterScreen</ButtonText>
      </Button>
      <Button
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <ButtonText>WelcomeScreen</ButtonText>
      </Button>
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
