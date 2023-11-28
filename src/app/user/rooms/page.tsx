// "use client";

import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ChatLists from "@/Components/Organism/Chat/ChatLists";

export default async function ChatList() {
  return (
    <>
      <section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>채팅</TextStore>
      </section>

      <ChatLists />
    </>
  );
}
