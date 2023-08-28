import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Button, Image, Pressable, Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LOG } from "../config/logger";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import FlashList from "@shopify/flash-list/dist/FlashList";
import { API_KEY_MOVIES_TMDb } from "@env";

const apiKey = process.env.API_KEY_MOVIES_TMDb;

const HomeScreen = () => {
  const navigator = useNavigation();
  const [films, setFilms] = useState();
  useEffect(() => {
    navigator.setOptions({
      title: "Home",
    });
  }, []);
  const DATA = [
    {
      title: "First Item",
      image:
        "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80",
    },
    {
      title: "Second Item",
      image:
        "https://images.unsplash.com/photo-1649459666789-ad3b5181d20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3730&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3812&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    },
  ];

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/157336/videos?api_key=${apiKey}`
      );
      LOG.error(data);
      // setFilms(data);
    };
    getMovies();
  }, []);

  const renderItem = (item, index) => {
    // LOG.info(item.item.image);
    return (
      <Box>
        <Image
          size="2xl"
          borderRadius={32}
          source={{ uri: item.item.image }}
          my="$4"
          mx="$4"
        />
        <Text color="#fff" mx="$4">
          {item.item.title}
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
            data={DATA}
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
