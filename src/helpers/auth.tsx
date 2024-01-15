import { useDispatch } from "react-redux";
import { LOG } from "../config/logger";
import useAuthentication from "../hooks/useAuthentication";
import { User } from "../types/interfaces";
import { setAuthStatus } from "../lib/redux/slices/authSlice";

const API_URL_REGISTER = "http://192.168.1.180:3000/api/auth/register";
const API_URL_LOGIN = "http://192.168.1.180:3000/api/auth/login";
const API_URL_LOGOUT = "http://192.168.1.180:3000/api/auth/logout";

// const API_URL_REGISTER = "http://192.168.1.246:4000/api/auth/register";
// const API_URL_LOGIN = "http://192.168.1.246:4000/api/auth/login";
// const API_URL_LOGOUT = "http://192.168.1.246:4000/api/auth/logout";


export const registerUser = async (user: User) => {
  // LOG.info(JSON.stringify(user));
  try {
    LOG.info("Registering user...");
    const resp: any = await fetch(API_URL_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    // LOG.error("after fetch", resp);
    const data: any = await resp.json();
    // LOG.warn(data);
    if (data.ok) {
      LOG.info("User registered successfully");

      return data;
    }
  } catch (error) {
    LOG.error(`Error in registerUser: ${error}`);
  }
};

export const loginUser = async (user: User) => {
  try {
    const resp: any = await fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data: any = await resp.json();
    LOG.debug(data);
    if (data.ok) {
      LOG.info("User logged in successfully");
    }
  } catch (error) {
    LOG.error(error);
  }
};

export const logoutUser = async () => {
  try {
    const resp: any = await fetch(API_URL_LOGOUT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await resp.json();
    LOG.debug(data);
  } catch (error) {
    LOG.error(error);
  }
};
