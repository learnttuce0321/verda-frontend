import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/Components-kim/Section";
import FundmanagerChatList from "@/organisms/fundmanager-kim/Rooms/Rooms";

export default function FundmanagerRoomsInfo() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>
          채팅문의
        </TextStore>
      </Section>

      <FundmanagerChatList />
    </>
  );
};
