"use client";

import { useRef, useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs"

export default function Chatingroom() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<any>([]);
  const [stompClient, setStompClient] = useState<any>(null); // WebSocket 클라이언트 객체를 업데이트하거나 초기화
  const inputRef = useRef<HTMLInputElement>(null);

  // 웹소켓 연결

  // stomp 채널 구독
  useEffect(() => {
    const webSocket = new WebSocket("ws://verda.monster/stomp/chat");
    webSocket.onopen = () => {
      console.log("소켓 연결");
    }

    console.log(Stomp)
    const client = Stomp.over(webSocket);
    client.connect(
      {},
      () => {
        client.subscribe(`/sub/chat/room/${1}`, (msg: any) => {
          console.log(msg);
        });
        setStompClient(client)
      },
      (error: any) => {
        console.log("errorMsg", error)
      }
    )
  }, [])
  /**
   * 메세지 받았을 때 처리
   */
  const onMessageReceived = (messageBody: any) => {
    const messageb = JSON.parse(messageBody)

    const data = {
      content: messageb.content,
      sender_email: messageb.sender_email,
      send_time: messageb.send_time,
      room_id: messageb.room_id
    }
    setChatMessages((prev: any) => [...prev, data])
  }
  /**
   * 메세지 작성했을 때 처리
   */
  const submitHandler = () => {
    const inputValue = inputRef.current;

    if (stompClient && inputValue!.value.length !== 0) {
      const url = `/pub/api/send/messages/${1}`
      const messageData = {
        room_id: 1,
        content: inputValue,
        // 전역으로 할 것
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

  return (
    <>
    </>
  )
};
