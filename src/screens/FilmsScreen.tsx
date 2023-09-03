import { ScrollView } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import PlayingNowComponent from "../components/playingNow/PlayingNowComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FilmsScreen = () => {
  const navigator = useNavigation();
  const insets = useSafeAreaInsets();




  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#000' }}>
      <PlayingNowComponent />
    </ScrollView>
  );
};

export default FilmsScreen;
