import Cookies from "js-cookie";
import Router from "next/router";

import { COOKIES } from "../contexts/token";

import { api } from "../services/api";
import { UserLogin } from "../model/login";

export const onLogin = async (login: UserLogin): Promise<string | void> => {
  const { data: token } = await api.post<string>("api/login", {
    ...login,
    device_name: "device_name"
  });

  if (token) {
    Cookies.set(COOKIES.authToken, token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    await Router.push("/dashboard");
  } else {
    await Router.push("/");
  }
};

export const onLogout = async (): Promise<void> => {
  Cookies.remove(COOKIES.authToken);

  delete api.defaults.headers.Authorization;
  await Router.push("/");
};
