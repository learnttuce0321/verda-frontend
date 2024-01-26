"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Stomp from "stompjs";
import InputMessage from "@/Components/Molecure/Button-jsh/Type/InputMessage";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

interface Props {
  setChatMessages: Dispatch<SetStateAction<any>>;
  roomId: string
};

interface Message {
  content: string;
  sender_email: string;
}

export default function ChatMessageInput({ setChatMessages, roomId }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaHeight, setTextareaHeight] = useState<string>("3.5rem")
  const [stompClient, setStompClient] = useState<any>(null); // WebSocket 클라이언트 객체를 업데이트하거나 초기화\
  const [loginEmail, setLoginEmail] = useRecoilState(loginState)

  /**
   * 실시간 채팅을 위한 setState하는 함수
   * @param messageBody 
   */
  const onMessageReceived = (messageBody: any) => {
    const messageb = JSON.parse(messageBody.body);

    const data: Message = {
      content: messageb.content,
      sender_email: messageb.sender,
    };
    setChatMessages((prev: any) => [...prev, data]);
  };

  useEffect(() => {
    const socket = new WebSocket(`${process.env.BASE_WEBSOCKET_URL}`);

    const client = Stomp.over(socket);
    client.connect(
      {},
      () => {
        client.subscribe(`/sub/chat/room/${roomId}`, (messageB) => {
          onMessageReceived(messageB);
        });
        setStompClient(client);
      },
      (error) => {
        console.log("error", error);
      },
    );

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      };
    };
  }, []);

  /**
   * 메세지 작성했을 때 처리
   */
  const submitHandler = (): void => {
    const inputValue = textareaRef.current;

    if (stompClient && inputValue!.value.length !== 0) {
      const uri = `/pub/api/send/messages/${roomId}`;

      const data: Message = {
        content: inputValue!.value,
        sender_email: loginEmail.email,
      };

      stompClient.send(
        uri,
        {},
        JSON.stringify(data)
      )
      inputValue!.value = ""
    };
  };

  return (
    <InputMessage textareaHeight={textareaHeight} setTextareaHeight={setTextareaHeight} submitHandler={submitHandler} ref={textareaRef} />
  )
}