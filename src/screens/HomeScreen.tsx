import { SafeAreaView } from "react-native";
import React from "react";
import { Box, Button, Image, Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlashList } from "@shopify/flash-list";
import { LOG } from "../config/logger";

const HomeScreen = () => {
  const mockData = [
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
  ];

  const renderItem = (item, index) => {
    LOG.info(item);
    return (
      <Box h="$72" bgColor="#000" w="$full">
        <Text>{item.title}</Text>
        <Image source={{ uri: item.image }} size="lg" />
      </Box>
    );
  };

  return (
    <SafeAreaView>
      <Box bgColor="$black">
        <Text color="#fff" textAlign="center" mt={"$8"}>
          What are you looking for?
        </Text>

        <FlashList
          renderItem={renderItem}
          data={mockData}
          estimatedItemSize={200}
        />
        <Image
          size="full"
          borderRadius={32}
          source={{
            uri: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2256&q=80",
          }}
        />
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
