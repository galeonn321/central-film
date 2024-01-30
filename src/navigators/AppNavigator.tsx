import React, { useEffect } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { LOG } from "../config/logger";
import { getTokenFromUser } from "../services/user.services";
import { TOKEN_KEY } from "@env";

const AppNavigator: React.FC = () => {


  const hasUserAccount = async () =>{
    const Token = await getTokenFromUser(TOKEN_KEY);
    LOG.info(Token, 'whaaat')
  }

  useEffect(() => {
    hasUserAccount();
  }, [])
  

  const isUserAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    LOG.info(`isUser authenticated: ${isUserAuthenticated}`);
  }, [isUserAuthenticated]);

  return isUserAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
