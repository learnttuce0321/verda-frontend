"use client";

import Link from "next/link";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChevronRight } from "react-bootstrap-icons";
import Section from "@/Components-kim/Section";

interface Props {
  postId: string;
  name: string;
  title: string;
}

interface ClientRequestProps {
  posts: Props[];
}

const USER_DUMMYDATA = [
  {
    id: 1,
    userName: "주상후",
    filmId: 1,
    title: "미국 주식투자 문의",
    firstMessage: "내용1",
    roomId: 1,
  },
  {
    id: 2,
    userName: "김aa",
    filmId: 2,
    title: "국내 주식투자 문의",
    firstMessage: "내용2",
    roomId: 2,
  },
];

export default function ClientRequest({
  posts,
}: ClientRequestProps): JSX.Element {
  const userData = USER_DUMMYDATA;
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
      </Section>
      <Section>
        {userData.map(userData => (
          <div key={userData.id} className="mt-2.5">
            <Link href={`/fundmanager/clientrequest/${userData.id}`}>
              <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
                <TextStore
                  textStyle={TextStyle.TEXT_M_24}
                  style="text-black font-bold"
                >
                  {userData.userName}
                </TextStore>
                <TextStore
                  textStyle={TextStyle.TEXT_R_20}
                  style="text-slate-500"
                >
                  {userData.title}
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
