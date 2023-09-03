import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AddIcon } from "@gluestack-ui/themed";
import PlayingNowComponent from "../components/playingNow/PlayingNowComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();


  return (
    <ScrollView style={{ flex: 1, paddingTop: insets.top + 20, backgroundColor: '#000' }}>
      <PlayingNowComponent />
    </ScrollView>
  );
};

export default ProfileScreen;
