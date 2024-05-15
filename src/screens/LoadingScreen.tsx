import { Box, Image } from "@gluestack-ui/themed";
import { View, Text } from "react-native";

const LoadingScreen = () => {
  return (
    <View>
        <Box position="absolute">
        <Text>Welcome</Text>
        </Box>
      <Image
        h="$full"
        w="$full"
        alt="Splash Image"
        source={require("../../assets/images/camera-film.jpg")}
      />
    </View>
  );
};

export default LoadingScreen;
