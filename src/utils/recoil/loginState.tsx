"use client";

import { atom } from "recoil";

interface LoginData {
  email: string;
  authToken: [];
  name: string;
}
export const loginState = atom<LoginData>({
  key: "loginState",
  default: {
    email: "",
    authToken: [],
    name: "",
  },
});
