"use client";

import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ChatMessageInput from "@/Components/Organism/Chat/ChatMessageInput";
import ChatRoom from "@/Components/Organism/Chat/ChatRoom";
import { useEffect, useState } from "react";

interface Props {
  params: {
    roomId: string;
  };
};

export default function ChatDetailPage({ params: { roomId } }: Props) {

  const [chatMessages, setChatMessages] = useState<any>([]);
  const [roomTitle, setRoomTitle] = useState<string>("");
  const getRoomTitle = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/chat/user/${roomId}`, {
      method: "GET",
    });

    return res.json()
  }

  useEffect(() => {
    const getTitle = async () => {
      const data = await getRoomTitle()
      setRoomTitle(data.targetName)
    }
    getTitle()
  }, [])

  return (
    <section className="w-[100%] ">
      <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} styl  e="mb-2">
        {roomTitle.length ? (
          roomTitle
        ) : (
          <>
            loading...
          </>
        )}
      </TextStore>

      <div className="border-2 opacity-100 h-[calc(100vh_-_145px)] overflow-y-scroll">
        <ChatRoom roomId={roomId} chatMessages={chatMessages} setChatMessages={setChatMessages} />
      </div>
      <ChatMessageInput setChatMessages={setChatMessages} roomId={roomId} />
    </section>
  );
}
