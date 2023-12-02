import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import Section from "@/Components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";

interface Props {
  roomId: string;
  name: string;
  title: string;
  content: string;
}

interface ChatListProps {
  rooms: Props[];
}

const CHAT_DUMMYDATA = [
  {
    id: 1,
    userName: "주상후",
    filmId: 1,
    title: "문의",
    firstMessage: "최근채팅내용1",
    roomId: 1,
  },
  {
    id: 2,
    userName: "김aa",
    filmId: 2,
    title: "문의",
    firstMessage: "최근채팅내용2",
    roomId: 2,
  },
];

export default function FundmanagerChatList() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>채팅문의</TextStore>
      </Section>

      <Section>
        {CHAT_DUMMYDATA.map(room => (
          <div key={room.id} className="mt-2.5">
            <Link href={`/fundmanager/rooms/${room.id}`}>
              <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
                <TextStore
                  textStyle={TextStyle.TEXT_M_24}
                  style="text-black font-bold"
                >
                  {room.userName}
                </TextStore>
                <TextStore
                  textStyle={TextStyle.TEXT_R_20}
                  style="text-slate-500"
                >
                  {room.firstMessage}
                </TextStore>
                <ChevronRight
                  fill="black"
                  width="2em"
                  height="2em"
                  className="absolute top-1/3 right-0 "
                />
              </BoxStore>
            </Link>
          </div>
        ))}
      </Section>
    </>
  );
}
