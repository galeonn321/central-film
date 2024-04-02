import React, { useEffect } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { LOG } from "../config/logger";
import { getTokenFromUser } from "../services/user.services";
import { setAuthStatus } from "../lib/redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY } from "@env";

const AppNavigator: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    hasUserAccount();
  }, []);

  const removeToken = async () => {
    LOG.error(TOKEN_KEY, "THIS IS ABOUT TO BE REMOVED.");
    await AsyncStorage.removeItem(TOKEN_KEY);
  };

  // useEffect(() => {
  //   removeToken();
  // }, []);

  const hasUserAccount = async () => {
    const token = await getTokenFromUser();
    LOG.debug(`is token validated: ${token}`);

    if (token) {
      dispatch(setAuthStatus({ isAuthenticated: true }));
      return;
    }
  };

  const isUserAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    LOG.info(`isUser authenticated: ${isUserAuthenticated}`);
  }, [isUserAuthenticated]);

  return isUserAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
