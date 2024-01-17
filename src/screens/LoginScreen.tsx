import {
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Input,
  InputField,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { LOG } from "../config/logger";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import LoginButton from "../components/loginButton/LoginButton";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
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
        pt="$20"
        mb="$6"
      >
        Central Film
      </Heading>
      <Box mx="$8">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText color="#fff">
              User or E-mail
            </FormControlLabelText>
          </FormControlLabel>

          <Input variant="underlined" borderColor="#fff">
            <InputField
              value={usernameInput}
              color="#fff"
              selectionColor={"#fff"}
              onChangeText={(text: string) => setUsernameInput(text)}
            />
            {usernameInput.length > 0 && (
              <Pressable
                onPress={() => setUsernameInput("")}
                justifyContent="center"
              >
                <AntDesign name="close" size={25} color={"#fff"} />
              </Pressable>
            )}
          </Input>
        </FormControl>
        <FormControl mt={"$4"} size="md">
          <FormControlLabel mb="$1">
            <FormControlLabelText color="#fff">Password</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined" borderColor="#fff">
            <InputField
              value={passwordInput}
              type={showPassword ? "text" : "password"}
              selectionColor={"#fff"}
              color="#fff"
              onChangeText={(text: string) => setPasswordInput(text)}
            />
            <Ionicons
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
        <LoginButton
          usernameInput={usernameInput}
          passwordInput={passwordInput}
        />
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
