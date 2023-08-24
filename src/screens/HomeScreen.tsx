import { SafeAreaView } from "react-native";
import React from "react";
import { Box, Button, Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Box bgColor="$black">
        <Text color="#fff" textAlign="center" mt={"$8"}>
          What are you looking for?
        </Text>

        <Button>
          <Ionicons name="md-checkmark-circle" size={32} color="white" />
          <Text>Queso</Text>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
