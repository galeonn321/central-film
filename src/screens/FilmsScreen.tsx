import { ScrollView } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import PlayingNowComponent from "../components/carouselComponent/CarouselComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text } from "@gluestack-ui/themed";

const FilmsScreen = () => {
  const navigator = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top + 40, backgroundColor: '#000' }}>
      <Text color="#fff"
        textAlign="center"
        p={"$2"}
        fontWeight="$extrabold"
        fontSize={"$3xl"}>Now playing</Text>
      <PlayingNowComponent path={'now_playing'} />
      <Text color="#fff"
        textAlign="center"
        p={"$2"}
        fontWeight="$extrabold"
        fontSize={"$3xl"}>Popular</Text>
      <PlayingNowComponent path={'popular'} />
      <Text color="#fff"
        textAlign="center"
        p={"$2"}
        fontWeight="$extrabold"
        fontSize={"$3xl"}>upcoming</Text>
      <Box mb='$24'>
        <PlayingNowComponent path={'upcoming'} />
      </Box>
    </ScrollView>
  );
};

export default FilmsScreen;
