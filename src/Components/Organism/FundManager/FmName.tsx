"use client";

import Section from "@/Components/_LayoutComponent/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { useRecoilValue } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function UserName() {
  const recoildata = useRecoilValue(loginState);
  return (
    <Section style=" text-2xl font-semibold">
      <TextStore textStyle={TextStyle.TEXT_R_40}> 안녕하세요</TextStore>
      <TextStore textStyle={TextStyle.TEXT_R_40} style="text-custom_skyblue">
        {recoildata.name}
        <span>님!</span>
      </TextStore>
    </Section>
  );
}
