import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOG } from "../config/logger";

export const setTokenToUser = async (token: string) => {
  try {
    await AsyncStorage.setItem("mykey", token);
  } catch (error) {
    LOG.error(`Error in setTokenToUser, error: ${error}`);
  }
};

export const getTokenToUser = async (token: string) => {
    try {
      const value = await AsyncStorage.getItem("mykey");

      if(value !== null){

      }
    } catch (error) {
      LOG.error(`Error in getTokenToUser, error: ${error}`);
    }
  };
