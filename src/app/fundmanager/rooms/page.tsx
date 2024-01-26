import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/Components/_LayoutComponent/Section";
import FundmanagerChatList from "@/Components/Organism/Chat/FundmanagerChatList";


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
