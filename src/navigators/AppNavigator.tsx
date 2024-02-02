import React, { useEffect } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { LOG } from "../config/logger";
import { getTokenFromUser } from "../services/user.services";
import { setAuthStatus } from "../lib/redux/slices/authSlice";

const AppNavigator: React.FC = () => {
  const dispatch = useDispatch();

  const hasUserAccount = async () => {
    const token = await getTokenFromUser();
    LOG.info(`is token validated: ${token}`);

    // if (token) {
    //   dispatch(setAuthStatus({ isAuthenticated: true, userToken: token}));
    // }
  };

  useEffect(() => {
    hasUserAccount();
  }, []);

  const isUserAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    LOG.info(`isUser authenticated: ${isUserAuthenticated}`);
  }, [isUserAuthenticated]);

  
  return isUserAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
