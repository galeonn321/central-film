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
  Pressable,
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
import { registerUser } from "../helpers/auth";
import { User } from "../types/interfaces";

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  useEffect(() => {
    validateEmail(emailInput);
    LOG.debug("Email validated", isEmailValid);
  }, [emailInput]);

  const onPressShowPassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  };

  const handleRegister = () => {
    const userData: User = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
    };
    if (usernameInput === "" || passwordInput === "" || emailInput === "") {
      LOG.error("Username or password or email is empty");
      return;
    } else if (passwordInput.length < 8) {
      LOG.error("Password must be at least 8 characters");
      return;
    } else if (usernameInput.length < 4 || emailInput.length < 4) {
      LOG.error("Username or email must be at least 4 characters");
      return;
    } else if (!isEmailValid) {
      LOG.error("Email is not valid");
      return;
    } else {
      registerUser(userData);
    }
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
                <Icon name={"close-outline"} size={25} color={"#fff"} />
              </Pressable>
            )}
          </Input>
        </FormControl>
        <FormControl mt={"$4"}>
          <FormControlLabel>
            <FormControlLabelText color="#fff">email</FormControlLabelText>
          </FormControlLabel>
          <Input variant="underlined" borderColor="#fff">
            <InputField
              value={emailInput}
              color="#fff"
              selectionColor={"#fff"}
              onChangeText={(text: string) => setEmailInput(text)}
            />
            {emailInput.length > 0 && (
              <Pressable
                onPress={() => setEmailInput("")}
                justifyContent="center"
              >
                <Icon name={"close-outline"} size={25} color={"#fff"} />
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
              color="#fff"
              selectionColor={"#fff"}
              onChangeText={(text: string) => setPasswordInput(text)}
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
          onPress={handleRegister}
        >
          {/* <ButtonSpinner mr="$1" /> */}
          <ButtonText>Create Account</ButtonText>
        </Button>
        <Text
          textAlign="center"
          mt="$4"
          color="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          Sign in
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
