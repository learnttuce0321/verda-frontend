"use client";

import Stomp from "stompjs";
import { useRef, useEffect, useState } from "react";

export default function Chatingroom() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<any>([]);
  const [stompClient, setStompClient] = useState<any>(null); // WebSocket 클라이언트 객체를 업데이트하거나 초기화
  const inputRef = useRef<HTMLInputElement>(null);


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

  // stomp 채널 구독
  useEffect(() => {
    const socket = new WebSocket("wss://verda.monster/wss");

    const client = Stomp.over(socket);
    client.connect(
      {},
      () => {
        client.subscribe(`/sub/chat/room${1}`, (messageB) => {
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
    <>
    </>
  )
};

