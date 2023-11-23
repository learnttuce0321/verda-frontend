"use client";

import Link from "next/link";
import Section from "@/Components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  params: {
    postId: string;
  };
  name: string;
  title: string;
}

const DUMMYDATA = [
  {
    id: 1,
    userName: "주상후",
    filmId: 1,
    title: "미국 주식투자 문의",
    firstMessage:
      "추가 상승여부로 말이 많았던 기준금리가 2회 연속 동결되며, 금리 인상 종료 기대감이 커지고 있습니다. 금리 관련 강경한 태도는 다소 누그러졌으나, 여전히 역대 최고수준의 고금리 상황이 지속되고 있는데요. 이런 상황에서 어떻게 투자하면 좋을까요?",
    roomId: 1,
  },
  {
    id: 2,
    userName: "김aa",
    filmId: 2,
    title: "문의",
    firstMessage: "내용2",
    roomId: 2,
  },
];

export default function RequestDetail({ params: { postId }, name, title }: Props) {
  const userData = DUMMYDATA[parseInt(postId, 10)];
  console.log(name, title)
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>
          {userData && userData.title}
        </TextStore>
      </Section>
      <Section>
        <BoxStore boxStyle={BoxStyle.BOX_CORNER_LARGE} style="h-96">
          <TextStore textStyle={TextStyle.TEXT_M_24} style="text-black">
            <span className="font-bold">{userData && userData.userName}</span>
          </TextStore>
          <TextStore textStyle={TextStyle.TEXT_R_20} style="text-black">
            <span className="font-bold">제목: </span>
            {userData && userData.title}
          </TextStore>
          <br />
          <TextStore textStyle={TextStyle.TEXT_R_20} style="text-black">
            <span className="font-bold">내용: </span>
            {userData && userData.firstMessage}
          </TextStore>
        </BoxStore>

        <Link href={`/fundmanager/rooms/${userData && userData.roomId}`}>
          <BoxStore
            boxStyle={BoxStyle.BOX_RECTANGLE_LONG_ORANGE}
            style="text-center mt-3.5"
          >
            <TextStore textStyle={TextStyle.TEXT_S_32_BLUE}>
              제안서 작성하기
            </TextStore>
          </BoxStore>
        </Link>
      </Section>
    </>
  );
}
