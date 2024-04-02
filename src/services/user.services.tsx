import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOG } from "../config/logger";
import { TOKEN_KEY } from "@env";

export const setTokenToUser = async (token: string) => {
  try {
    await AsyncStorage.setItem(token, TOKEN_KEY);

    LOG.debug(token, 'Token stored successfully')
  } catch (error) {
    LOG.error(`Error in setTokenToUser, error: ${error}`);
  }
};

export const getTokenFromUser = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN_KEY);
    LOG.debug(value, 'from gettokenfromuser')

    if (value !== null) {
      return value;
    }
  } catch (error) {
    LOG.error(`Error in getTokenToUser, error: ${error}`);
  }
};
