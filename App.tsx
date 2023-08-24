import {
  GluestackUIProvider,
  Text,
  Box,
  config,
  Button,
} from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Box width="100%" justifyContent="center" alignItems="center" flex={1}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button>
          <Text>queso</Text>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
}
