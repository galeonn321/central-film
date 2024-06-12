import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchContent from "../components/searchContent/SearchContent";
import { Box } from "@gluestack-ui/themed";
import { StackNavigationProp } from "@react-navigation/stack";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();
  

  return (
    <ScrollView
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#000" }}
    >
      <Box>
        <Box alignSelf="center">
        </Box>
        <SearchContent />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
