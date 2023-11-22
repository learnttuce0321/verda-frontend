"use client";

import GoBackBtn from "@/Components-kim/GoBack";

interface Props {
  params: {
    roomId: string;
  };
}

const ROOM_DUMMYDATA = [
  {
    id: 1,
    userName: "주상후",
    title: "문의",
    userMessage: "넹 감사합니다.",
    fundmanagerMessage:
      "그건에 관해서는 3분기 미국 경제는 4.9% 가량 성장하는 모습으로,호조세 지속이 강한 모습을 보이고 있습니다. 따라서 Kodex미국배당프리미엄 액티브 ETF에 투자하는 방향이 어떠신지 제안드립니다.",
  },
];

export default function Chat({ params: { roomId } }: Props) {
  const roomdata = ROOM_DUMMYDATA[0];
  return (
    <>
      <section className="w-[100%]">
        <p>채팅창</p>

        <p>{roomdata.userName}</p>
        <div className="border-2 border-indigo-500/100 ">
          <div className="border-2 border-indigo-500/100 w-72 ">
            {roomdata.fundmanagerMessage}
          </div>
          <div className="border-2 border-indigo-500/100 w-72  ">
            <p>{roomdata.userName}</p>
            <p>{roomdata.userMessage} </p>
          </div>
        </div>
        <input placeholder="메세지를 입력하세요" />
      </section>
    </>
  );
}
