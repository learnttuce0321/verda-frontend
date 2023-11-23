"use client";

import GoBackBtn from "@/Components-kim/GoBack";
import Section from "@/Components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface UserData {
  fmId: String;
  image: string;
  email: string;
  fundmanagerName: string;
  age: number;
  phoneNum: string;
}

const USER_DUMMYDATA: UserData[] = [
  {
    fmId: "1",
    fundmanagerName: "김철수",
    image: "사진 ",
    email: "user@example.com",
    age: 30,
    phoneNum: "010-1234-5678",
  },
];
export default function MyPage() {
  const userdata: UserData = USER_DUMMYDATA[0];
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>내 정보</TextStore>
        {userdata.image}

        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
          style="text-black mt-2"
        >
          <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
            {userdata.email}
          </TextStore>
        </BoxStore>

        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
          style="text-black mt-2"
        >
          <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
            {userdata.fundmanagerName}
          </TextStore>
        </BoxStore>

        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
          style="text-black mt-2"
        >
          <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
            {userdata.age}세
          </TextStore>
        </BoxStore>
        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE}
          style="text-black mt-2"
        >
          <TextStore textStyle={TextStyle.TEXT_R_30} style="pl-3">
            {userdata.phoneNum}
          </TextStore>
        </BoxStore>
      </Section>
    </>
  );
}
