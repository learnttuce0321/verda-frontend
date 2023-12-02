"use client";
import { atom } from "recoil";

interface LoginData {
  email: string;
  // 다른 필요한 속성들도 추가할 수 있습니다.
}
export const loginState = atom<LoginData>({
  key: "loginState",
  default: {
    email: "",
  },
});
