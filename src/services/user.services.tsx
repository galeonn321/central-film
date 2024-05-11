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
    const keyToken = await AsyncStorage.getItem(TOKEN_KEY);
    LOG.debug(`this is the key token  from getTokenFromUser: ${keyToken} ${TOKEN_KEY}`);

    if (keyToken !== null) {
      return keyToken;
    }
  } catch (error) {
    LOG.error(`Error in getTokenToUser, error: ${error}`);
  }
};
