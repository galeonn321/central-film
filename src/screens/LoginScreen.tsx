import {
  Box,
  Button,
  ButtonText,
  FormControl,
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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { setAuthStatus } from "../lib/redux/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const onPressShowPassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleLogin = () => {
    dispatch(setAuthStatus({ isAuthenticated: true, user: null }));
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
        pt="$20"
        mb="$6"
      >
        Central Film
      </Heading>
      <Box mx="$8">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText color="#fff">
              UserName or email
            </FormControlLabelText>
          </FormControlLabel>

          <Input variant="underlined" borderColor="#fff">
            <InputField color="#fff" selectionColor={"#fff"} />
          </Input>
        </FormControl>
        <FormControl mt={"$4"} size="md">
          <FormControlLabel mb="$1">
            <FormControlLabelText color="#fff">Password</FormControlLabelText>
          </FormControlLabel>

          <Input variant="underlined" borderColor="#fff">
            <InputField
              type={showPassword ? "text" : "password"}
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
          <Text mt="$3" color="#fff9">
            Forgot Password?
          </Text>
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
          onPress={handleLogin}
        >
          {/* <ButtonSpinner mr="$1" /> */}
          <ButtonText>Log In</ButtonText>
        </Button>
        <Text
          textAlign="center"
          mt="$4"
          color="#fff"
          onPress={() => navigation.navigate("Register")}
        >
          Sign up
        </Text>
      </Box>
    </Box>
  );
};

export default LoginScreen;
