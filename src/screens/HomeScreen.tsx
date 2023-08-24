import { SafeAreaView } from "react-native";
import React from "react";
import { Box, Text } from "@gluestack-ui/themed";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Box bgColor="$black">
        <Text color="#fff">HomeScreen</Text>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
