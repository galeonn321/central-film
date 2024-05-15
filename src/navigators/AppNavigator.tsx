import React, { useEffect, useState } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useDispatch, useSelector } from "react-redux";
import { LOG } from "../config/logger";
import { getTokenFromUser } from "../services/user.services";
import { setAuthStatus } from "../lib/redux/slices/authSlice";
import LoadingScreen from "../screens/LoadingScreen";

const AppNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    hasUserAccount();
  }, []);

  const hasUserAccount = async () => {
    setIsLoading(true)
    const token = await getTokenFromUser();

    if (token) {
      dispatch(setAuthStatus({ isAuthenticated: true }));
      setIsLoading(false);
      return;
    }else{
      setIsLoading(false);
    }
  };

  const isUserAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if(isLoading){
    return <LoadingScreen />;
  }

  return isUserAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
