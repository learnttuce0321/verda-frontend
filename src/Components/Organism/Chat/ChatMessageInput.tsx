"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Stomp from "stompjs";
import InputMessage from "@/Components/Molecure/Button-jsh/Type/InputMessage";

interface Props {
  setChatMessages: Dispatch<SetStateAction<any>>;
  roomId: string
};

export default function ChatMessageInput({ setChatMessages, roomId }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaHeight, setTextareaHeight] = useState<string>("3.5rem")
  const [stompClient, setStompClient] = useState<any>(null); // WebSocket 클라이언트 객체를 업데이트하거나 초기화
  const inputRef = useRef<HTMLInputElement>(null);

  const onMessageReceived = (messageBody: any) => {
    const messageb = JSON.parse(messageBody)
    console.log(messageb)

    const data = {
      content: messageb.content,
      sender_email: messageb.sender_email,
    }
    setChatMessages((prev: any) => [...prev, data])
  }
  /**
   * 메세지 작성했을 때 처리
   */
  const submitHandler = (): void => {
    const inputValue = textareaRef.current;

    if (stompClient && inputValue!.value.length !== 0) {
      const url = `/pub/api/send/messages/${1}`;

      const messageData = {
        room_id: 1,
        content: inputValue!.value,
        sender_email: "jusanghoo0321@naver.com",
      }

      stompClient.send(
        url,
        {},
        JSON.stringify(messageData)
      )
      inputValue!.value = ""
    }
  }

  useEffect(() => {
    const socket = new WebSocket("wss://verda.monster/wss");

    const client = Stomp.over(socket);
    client.connect(
      {},
      () => {
        client.subscribe(`/sub/chat/room/${1}`, (messageB) => {
          onMessageReceived(messageB);
        });
        setStompClient(client);
      },
      (error) => {
        console.log("error", error)
      },
    );

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    }
  }, [])

  return (
    <InputMessage textareaHeight={textareaHeight} setTextareaHeight={setTextareaHeight} submitHandler={submitHandler} ref={textareaRef} />
  )
}