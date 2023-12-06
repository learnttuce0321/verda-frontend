import ReviewWrite from "@/Component-son/ReviewWrite";
import Section from "@/components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export default function WritePostPage() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          투자후기 작성하기
        </TextStore>
      </Section>

      <ReviewWrite />
    </>
  );
}
