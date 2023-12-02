"use client";
import { atom } from "recoil";

interface Code {
  code: string;
  // 다른 필요한 속성들도 추가할 수 있습니다.
}
export const CodeState = atom<Code>({
  key: "CodeState",
  default: {
    code: "",
  },
});
