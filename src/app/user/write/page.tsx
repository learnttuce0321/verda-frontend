import Section from "@/Components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import WriteInput from "@/Components/Organism/Write/WriteInput";

export default function WritePostPage() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          투자문의 작성하기
        </TextStore>
      </Section>

      <WriteInput />
    </>
  );
}
