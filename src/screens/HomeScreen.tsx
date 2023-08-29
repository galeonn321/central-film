import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { LOG } from "../config/logger";
import { useNavigation } from "@react-navigation/native";
import FlashList from "@shopify/flash-list/dist/FlashList";
import { API_KEY_MOVIES_TMDb } from "@env";
import movieDB from "../api/movieDB";

const apiKey = process.env.API_KEY_MOVIES_TMDb;

const HomeScreen = () => {
  const navigator = useNavigation();
  const [films, setFilms] = useState<Object>({});
  useEffect(() => {
    navigator.setOptions({
      title: "Home",
    });
  }, []);
  useEffect(() => {
    movieDB({ params: { api_key: API_KEY_MOVIES_TMDb, query: "titanic" } })
      .then((response) => {
        // LOG.info(response);
        setFilms(response.data.results);
      })
      .catch((error) => {
        LOG.error(error);
      })
      .finally(() => {
        LOG.info("finally");
      });

    LOG.info(movieDB);
  }, []);

  useEffect(() => {
    // LOG.warn(films);
  }, [films]);

  const renderItem = (item, index) => {
    LOG.info(item.item.poster_path, item.item.title, item.item.overview);
    return (
      <Box>
        <Image
          size="2xl"
          borderRadius={32}
          source={{ uri: item.item.path }}
          my="$4"
          mx="$4"
        />
        <Text color="#fff" mx="$4">
          {item.item?.title}
        </Text>
        <Text color="#fff" mx="$4" maxWidth={"$32"} flexWrap="wrap">
          {item.item?.overview}
        </Text>
      </Box>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#000" }}>
      <ScrollView>
        <Image
          size="xs"
          borderRadius={32}
          source={{
            uri: "https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
          }}
          my="$4"
          mx="$4"
        />
        <Box bgColor="$black" mb="$72">
          <Text
            color="#fff"
            textAlign="center"
            mt={"$8"}
            p={"$2"}
            fontWeight="$extrabold"
            fontSize={"$3xl"}
          >
            What are you looking for?
          </Text>
          <FlashList
            data={films}
            horizontal
            renderItem={renderItem}
            estimatedItemSize={200}
          />

          <Image
            size="2xl"
            borderRadius={32}
            source={{
              uri: "https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
            }}
            alignSelf="center"
            my="$12"
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
