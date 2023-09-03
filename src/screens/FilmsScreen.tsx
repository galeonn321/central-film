import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { Box } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const FilmsScreen = () => {
  const navigator = useNavigation();


  useEffect(() => {
    navigator.setOptions({
      title: "Films",
    });
  }, []);

  return (
    <Box flex={1} bgColor="#707070">
      <Text>FilmsScreen</Text>
    </Box>
  );
};

export default FilmsScreen;
