"use client";

import Link from "next/link";
import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";
import { useRouter } from "next/navigation";

interface Props {
  postid: string;
}

interface Request {
  name?: string;
  title?: string;
  content?: string;
  userId: string;
}

export default function RequestDetail({ postid }: Props) {
  const [request, setRequest] = useState<Request | null>(null);
  const [findRoomId, setfindRoomId] = useState<number | null>(-1);
  const [buttonMessage, setbuttonMessage] = useState<string>("제안서 작성하기");
  const [token, setToken] = useRecoilState(loginState);
  const router = useRouter();

  const getRequestDetail = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/${postid}`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  };

  const getFindChatList = async (): Promise<any> => {
    console.log("token", token.authToken.accessToken);
    const res = await fetch(
      `${process.env.BASE_URL}/api/exist/chat/${postid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            token.authToken.accessToken
              ? token.authToken.accessToken
              : JSON.parse(localStorage.getItem("loginData") as string)
                  .authToken.accessToken
          }`,
        },
      },
    );

    return res.json();
  };

  const makeChat = async (userId: number): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          token.authToken.accessToken
            ? token.authToken.accessToken
            : JSON.parse(localStorage.getItem("loginData") as string).authToken
                .accessToken
        }`,
      },
      body: JSON.stringify({
        postId: postid,
        userId,
      }),
    });
    const roomId = await res.json();

    return roomId;
  };

  useEffect(() => {
    const fetchData = async () => {
      const requestData = await getRequestDetail();
      setRequest(requestData);
    };

    fetchData();
  }, [postid]);

  useEffect(() => {
    const changeButtonText = async () => {
      const chatList = await getFindChatList();
      console.log(chatList);
      if (chatList.roomId !== -1) {
        setfindRoomId(chatList.roomId);
        setbuttonMessage("채팅하기");
      }
    };
    changeButtonText();
  }, []);

  console.log(token);

  return (
    <Section style="m-auto">
      <TextStore
        textStyle={TextStyle.TEXT_R_40_BLUE}
        style="text-white mb-[2.5rem]"
      >
        {request && request.name}
      </TextStore>

      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_WHITE}
        style="h-[calc(80vh_-_144px)]"
      >
        <TextStore textStyle={TextStyle.TEXT_M_24} style="text-black">
          <span className="font-bold">{request && request.title}</span>
        </TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_24} style="text-black">
          <span className="font-bold" />
          {request && request.content}
        </TextStore>
        <br />
      </BoxStore>

      {/* <Link href={`/fundmanager/rooms/${findRoomId}`}> */}
      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_LONG_ORANGE}
        style="text-center mt-3.5 "
        clickHandler={async () => {
          try {
            if (findRoomId !== -1) {
              router.push(`/fundmanager/rooms/${findRoomId}`);
            } else {
              const insertChat = await makeChat(parseInt(request!.userId, 10));
              router.push(`/fundmanager/rooms/${insertChat.roomId}`);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <TextStore textStyle={TextStyle.TEXT_S_32_BLUE}>
          {buttonMessage}
        </TextStore>
      </BoxStore>
      {/* </Link> */}
    </Section>
  );
}
