"use client";

import Link from "next/link";
<<<<<<< Updated upstream
import { notFound } from "next/navigation";
import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
=======
import Section from "@/Components-kim/Section";
>>>>>>> Stashed changes
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";

interface Props {
  params: {
    postId: string;
  };
}

<<<<<<< Updated upstream
const CHATLIST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: '주상후',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 주상후 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  },
  {
    id: 2,
    fundManagerName: '손영석',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 손영석 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  },
  {
    id: 3,
    fundManagerName: '김미리',
    firstMessage:
      '안녕하세요. 저는 펀드매니저 김미리 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  }
];
=======
export default async function PostDetailPage({ params: { postId } }: Props) {
  const getPostDetail = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/${postId}`, {
      method: "GET",
      cache: "no-store",
    });
>>>>>>> Stashed changes

const POST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: "주상후",
    title: "미국 주식 투자 문의",
    content:
      "ㅁㄴㄻㄴㄻㄴㅇㄻㄴㄹㅇㅁㄴㄹㅇㄴㅁㄻㄴㄻㄴㄹㄴㅁㄻㄴㄹㅇㄴㅁㄻㄴㄻㄴㅇㄻㄴㄹㄴㅁㄻㄴㅇㄻㄴㄹ",
  },
  {
    id: 2,
    fundManagerName: "손영석",
    title: "미국 펀드 투자 문의",
    content:
      "ㅔㅕㅑㅐㅕㅐㅕㅐㅔㅕㅐㅔㅕㅔㅐㅕㅐㅕㅐㅕㅔㅐㅑㅕㅐㅔㅑㅕㅔㅐㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅕ",
  },
];

<<<<<<< Updated upstream
export default function PostDetailPage({ params: { postId } }: Props) {
  const data = POST_DUMMYDATA.find(post => post.id === parseInt(postId, 10));

  if (data === undefined) {
    notFound();
  }
=======
  // todos : 타입지정
  const post: Post = await getPostDetail();
>>>>>>> Stashed changes

  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          {data?.title}
        </TextStore>
      </Section>
      <section>
        <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_WHITE} style="p-4 mb-4">
          <TextStore textStyle={TextStyle.TEXT_R_24}>
            {data?.title}
          </TextStore>
        </BoxStore>
        <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_WHITE} style="h-[calc(80vh_-_144px)]">
          <TextStore textStyle={TextStyle.TEXT_R_24}>
            {data?.content}
          </TextStore>
        </BoxStore>
      </section>

      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mt-[2.5rem]">제안서 목록</TextStore>
      </Section>
      <section className="pb-5">
        <div className="flex items-center flex-col">
          {
            CHATLIST_DUMMYDATA.map(chat => {
              return (
                <Link href={`/user/rooms/${chat.id}`} key={chat.id}>
                  <ButtonListInfo chat={chat} />
                </Link>
              );
            })
          }
        </div>
      </section>
    </>
  );
}
