import React, { useEffect } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { LOG } from "../config/logger";


const AppNavigator: React.FC = () => {
  const isUserAuthenticated = useSelector((state: any ) => state.auth.isAuthenticated);


  useEffect(() => {
    LOG.info(isUserAuthenticated)
  }, [isUserAuthenticated]);
  


  return isUserAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
