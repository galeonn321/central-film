import {
  GluestackUIProvider,
  Text,
  Box,
  config,
  Button,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { LOG } from "./src/config/logger";

export default function App() {
  const queso = () => {
    LOG.info("queso");
  };
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box width="100%" justifyContent="center" alignItems="center">
          <Text>Open up App.js to start working on your app!</Text>
          <Button>
            <Text color="#fff">queso</Text>
          </Button>
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
