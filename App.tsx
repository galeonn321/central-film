import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/themed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your appasdasasdasasdasdasd!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
