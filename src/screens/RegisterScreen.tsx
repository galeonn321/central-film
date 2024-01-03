import {
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import { LOG } from "../config/logger";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const onPressShowPassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <Box w="$full" h={windowHeight} bgColor="$black">
      <Image
        source={require("../../assets/images/cinema.jpg")}
        alt="miniature example"
        size="full"
        opacity={0.5}
        alignSelf="center"
        mt="$2"
        role="presentation"
        position="absolute"
      />
      <Heading
        alignSelf="center"
        color="#fff"
        fontSize={"$5xl"}
        pt="$10"
        mt="$4"
        mb="$8"
      >
        Central Film
      </Heading>
      <Box mx="$8">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText color="#fff">UserName</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined" borderColor="#fff">
            <InputField color="#fff" selectionColor={"#fff"} />
          </Input>
        </FormControl>
        <FormControl mt={"$4"}>
          <FormControlLabel>
            <FormControlLabelText color="#fff">email</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined" borderColor="#fff">
            <InputField color="#fff" selectionColor={"#fff"} />
          </Input>
        </FormControl>
        <FormControl
          mt={"$4"}
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText color="#fff">Password</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined" borderColor="#fff">
            <InputField
              type={showPassword ? "text" : "password"}
              color="#fff"
              selectionColor={"#fff"}
            />
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              style={{ alignSelf: "center" }}
              color={"#fff"}
              onPress={onPressShowPassword}
            />
          </Input>
        </FormControl>
        <Button
          mt="$10"
          rounded={"$full"}
          bgColor="$red900"
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          {/* <ButtonSpinner mr="$1" /> */}
          <ButtonText>Create Account</ButtonText>
        </Button>
        <Text textAlign="center" mt="$4" color="#fff" onPress={() => navigation.navigate("Login")}>
          Sign in
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
