import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOG } from "../config/logger";
import { TOKEN_KEY } from "@env";

export const setTokenToUser = async (token: string) => {
  try {
    const jsonToken = JSON.stringify(token);
    await AsyncStorage.setItem(TOKEN_KEY, jsonToken);
  } catch (error) {
    LOG.error(`Error in setTokenToUser, error: ${error}`);
  }
};

export const getTokenFromUser = async () => {
  try {
    const keyToken = await AsyncStorage.getItem(TOKEN_KEY);

    if (keyToken !== null) {
      LOG.debug(`This is the key token from getTokenFromUser: ${keyToken}`);
      return keyToken;
    }
  } catch (error) {
    LOG.error(`Error in getTokenFromUser, error: ${error}`);
  }
}
