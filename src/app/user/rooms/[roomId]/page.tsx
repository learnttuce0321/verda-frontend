"use client";

import { notFound } from "next/navigation";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputMessage from "@/Components/Molecure/input-kmr/InputMessage";

interface Props {
  params: {
    roomId: string;
  };
};

const CHATLIST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: '주상후',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 주상후 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: '안녕하세요',
  },
  {
    id: 2,
    fundManagerName: '손영석',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 손영석 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: '하',
  },
  {
    id: 3,
    fundManagerName: '김미리',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 김미리 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: 'ㅁ유햐',
  },
];

export default function ChatDetailPage({ params: { roomId } }: Props) {
  const data = CHATLIST_DUMMYDATA.find(chat => chat.id === parseInt(roomId, 10));

  if (data === undefined) {
    notFound();
  }
  return (
    <section className="w-[100%] ">
      <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-2">
        {data?.fundManagerName}
      </TextStore>
      <div className="border-2 opacity-100 h-[calc(100vh_-_126px)] overflow-y-scroll">
        {/* todos : 이거 백엔드랑 연결 후 설정해야됨 */}
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_CHAT_SMOG}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.firstMessage}
          </TextStore>
        </BoxStore>

        <BoxStore boxStyle={BoxStyle.BOX_CHAT_ORANGE}>
          <TextStore textStyle={TextStyle.TEXT_S_16}>
            {data?.secondMessage}
          </TextStore>
        </BoxStore>
      </div>
      {/* </section> */}
      {/* todos: input 생성해야됨 */}
      {/* <section> */}
    </section>
  );
}
