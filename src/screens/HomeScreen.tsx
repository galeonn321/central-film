import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Box, Heading, Image, Input, InputField } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlayingNowComponent from "../components/playingNow/PlayingNowComponent";
import { LOG } from "../config/logger";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#000' }}>
      <Box >
        <Image
          size="xs"
          borderRadius={32}
          source={{
            uri: "https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
          }}
          my="$4"
          mx="$4"
        />
        <Box bgColor="$black">
          <Heading
            color="#fff"
            textAlign="center"
            p={"$2"}
            fontWeight="$extrabold"
            fontSize={"$3xl"}
          >
            Search and see how good the film is
          </Heading>
          <Input
            bgColor="#707070"
            borderColor="#fff"
            borderWidth={1}
            borderRadius={12}
            mx="$4"
          >
            <InputField color="#fff" placeholder="film, actor, director" />
          </Input>

          <PlayingNowComponent path={'66753'} />
        </Box>
      </ Box >
    </ ScrollView>
  );
};

export default HomeScreen;
