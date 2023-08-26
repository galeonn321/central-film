import { SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Box, Button, Image, Pressable, Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

import { LOG } from "../config/logger";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import FlashList from "@shopify/flash-list/dist/FlashList";

const HomeScreen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: "Home",
    });
  }, []);
  const DATA = [
    {
      title: "First Item",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    },
    {
      title: "Second Item",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
    {
      title: "Third Item",
      image:
        "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
    },
  ];

  const renderItem = (item, index) => {
    LOG.info(item);
    return (
      <Box>
        <Image
          size="2xl"
          borderRadius={32}
          source={{ uri: item.image }}
          my="$4"
          mx="$4"
        />
        <Text color="#fff">{item.title}</Text>
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
            uri: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
          }}
          my="$4"
          mx="$4"
        />
        <Box bgColor="$black" mb="$12">
          <Text
            color="#fff"
            textAlign="center"
            mt={"$8"}
            fontWeight="$extrabold"
          >
            What are you looking for?
          </Text>
          <FlashList
            data={DATA}
            horizontal
            renderItem={renderItem}
            estimatedItemSize={200}
          />
          <Pressable
            onPress={() => LOG.info("queso")}
            sx={{ ":pressed": { opacity: 0 } }}
          >
            <Image
              size="2xl"
              borderRadius={32}
              source={{
                uri: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
              }}
              alignSelf="center"
              my="$12"
            />
          </Pressable>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
