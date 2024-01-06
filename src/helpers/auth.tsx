import { LOG } from "../config/logger";
import { User } from "../types/interfaces";

const API_URL_REGISTER = "http://localhost:3000/api/auth/register";
const API_URL_LOGIN = "http://localhost:3000/api/auth/login";
const API_URL_LOGOUT = "http://localhost:3000/api/auth/logout";

export const registerUser = async (user: User, cleanFormRegister: any) => {
  try {
    const resp: any = await fetch(API_URL_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data: any = await resp.json();
    LOG.debug(data);
    if (data.ok) {
      cleanFormRegister();
    }
  } catch (error) {
    LOG.error(error);
  };
};

export const loginUser = async (user: User, cleanFormLogin: any) => {
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
      cleanFormLogin();
    }
  } catch (error) {
    LOG.error(error);
  };
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
  };
};
