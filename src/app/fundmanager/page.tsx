"use client";

import Link from "next/link";
import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

// async function getData() {
//   const res = await fetch(process.env.BASE_URL + `/api/rooms/fm/${roomid}`);

//   if (!res.ok) {
//     console.log("error");
//   } else {
//     console.log(res);
//   }

//   return res.json();
// }

export default function FundmanagerLayout() {
  // const data = await getData();
  // console.log(process.env.BASE_URL + `/api/rooms/fm/${roomid}`);
  // console.log(data);

  return (
    <>
      <Section style=" text-2xl font-semibold">
        <TextStore textStyle={TextStyle.TEXT_R_40}> 안녕하세요</TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_40} style="text-custom_skyblue">
          fundmanager01
          <span className="text-white">님!</span>
        </TextStore>
      </Section>

      <div className="grid grid-cols-2 gap-2">
        <Section>
          <Link href="/fundmanager/clientrequest">
            <BoxStore boxStyle={BoxStyle.BOX_SQUARE_WHITE}>
              <TextStore textStyle={TextStyle.TEXT_M_24}>
                <span className="text-black h-48 rounded-lg p-3 ">
                  투자문의
                </span>
              </TextStore>
              <TextStore textStyle={TextStyle.TEXT_M_24}>
                <span className="text-black ">보러가기 </span>
              </TextStore>
            </BoxStore>
          </Link>
        </Section>

        <Section>
          <Link href="/fundmanager/rooms">
            <BoxStore boxStyle={BoxStyle.BOX_SQUARE_ORANGE}>
              <TextStore textStyle={TextStyle.TEXT_M_24}>
                <span>채팅목록</span>
              </TextStore>
            </BoxStore>
          </Link>
        </Section>
      </div>
    </>
  );
}
