import { LOG } from "../config/logger";
import { getTokenFromUser } from "../services/user.services";
import { User, UserLogin } from "../types/interfaces";

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
    // LOG.info(data);

    return data;
  } catch (error) {
    LOG.error(`Error in registerUser: ${error}`);
  }
};

export const loginUser = async (user: UserLogin) => {
  try {
    const token = await getTokenFromUser();
    LOG.info(`is token validated: ${token}`);

    const resp: any = await fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data: any = await resp.json();

    LOG.info(data);

    return data;
  } catch (error) {
    LOG.error(error, "Error in loginUser function of auth");
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
