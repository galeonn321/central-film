import { ScrollView } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import PlayingNowComponent from "../components/playingNow/PlayingNowComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@gluestack-ui/themed";

const FilmsScreen = () => {
  const navigator = useNavigation();
  const insets = useSafeAreaInsets();




  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top + 40, backgroundColor: '#000' }}>
      <PlayingNowComponent />
      <Text>
        QUESO
      </Text>
    </ScrollView>
  );
};

export default FilmsScreen;
