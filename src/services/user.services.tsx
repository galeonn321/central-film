import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOG } from "../config/logger";
import { TOKEN_KEY } from "@env";

export const setTokenToUser = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    LOG.debug("worked the async apaprently lmao");
  } catch (error) {
    LOG.error(`Error in setTokenToUser, error: ${error}`);
  }
};

export const getTokenFromUser = async (token: string) => {
  try {
    const value = await AsyncStorage.getItem(TOKEN_KEY);

    if (value !== null) {
      return LOG.error('wtf')
    }
  } catch (error) {
    LOG.error(`Error in getTokenToUser, error: ${error}`);
  }
};
