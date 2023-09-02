import { ActivityIndicator, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Heading, Image, Input, Pressable, Text } from "@gluestack-ui/themed";
import { LOG } from "../config/logger";
import { useNavigation } from "@react-navigation/native";
import FlashList from "@shopify/flash-list/dist/FlashList";
import { API_KEY_MOVIES_TMDb } from "@env";
import movieDB from "../api/movieDB";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const apiKey = process.env.API_KEY_MOVIES_TMDb;

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigator = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    navigator.setOptions({
      title: "Home",
    });
  }, []);




  useEffect(() => {
    movieDB('/now_playing')
  }, []);

  const renderItem = (item, index) => {
    const uri = `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`
    return (
      <Pressable
        onPress={() => {
          // navigator.navigate("Details", { id: item.item?.id });
          LOG.info(item.item?.id)
        }}
      >
        <Image
          size={'2xl'}
          borderRadius={32}
          source={{ uri: uri ?? '' }}
          resizeMode="cover"
          mx="$4"
          sx={{ ":pressed": { backgroundColor: "#fff" } }}
        />
        <Text color="#fff" mx="$4" mt='$4' italic fontWeight="700" fontSize={'$xl'} py={'$2'} maxWidth={'$72'}>
          {item.item?.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}  >
      <ScrollView >
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
            placeholder="Search"
            placeholderTextColor="#fff"
            bgColor="$black"
            color="#fff"
            borderColor="#fff"
            borderWidth={1}
            borderRadius={12}
            mx="$4"
            my="$4"
            p="$4"
          />
          <Heading
            color="#fff"
            textAlign="center"
            p={"$2"}
            fontWeight="$extrabold"
            fontSize={"$3xl"}
          >
            Playing now
          </Heading>
          {isLoading ? <ActivityIndicator size="large" color="#fff" /> :
            <Box>
              <FlashList
                data={films}
                horizontal
                renderItem={renderItem}
                estimatedItemSize={200}
              />
            </Box>
          }
          <Image
            size="2xl"
            borderRadius={32}
            source={{
              uri: "https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
            }}
            alignSelf="center"
            my="$12"
            resizeMode="cover"
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
