"use client";

import Section from "@/Components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";
import { useEffect, useState } from "react";

export interface UserProfile {
  fmId?: number;
  email?: string;
  name?: string;
  age_range?: string;
  number?: string;
}

export default function MyPage() {
  const [token, setToken] = useRecoilState(loginState);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  console.log(token);

  const getFundManagerProfile = async (): Promise<UserProfile | null> => {
    const res = await fetch(
      `${process.env.BASE_URL}/api/members/fund/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.authToken.accessToken
              ? token.authToken.accessToken
              : JSON.parse(localStorage.getItem("loginData") as string)
                .authToken.accessToken
            }`,
        },
      },
    );

    return res.json();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const getProfile = await getFundManagerProfile();
      setProfile(getProfile);
      console.log(getProfile);
    };
    fetchProfile();
  }, []);

  return (
    <Section>
      <TextStore textStyle={TextStyle.TEXT_R_40}>내 정보</TextStore>
      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
        style="text-black mt-5 w-full"
      >
        <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
          {profile && profile.email}
        </TextStore>
      </BoxStore>

      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
        style="text-black mt-2 w-full"
      >
        <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
          {profile && profile.name}
        </TextStore>
      </BoxStore>

      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
        style="text-black mt-2 w-full"
      >
        <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
          {profile && profile.age_range}세
        </TextStore>
      </BoxStore>
      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
        style="text-black mt-2 w-full"
      >
        <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
          {profile && profile.number}
        </TextStore>
      </BoxStore>
    </Section>
  );
}
