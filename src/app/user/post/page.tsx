import Section from "@/Components/_LayoutComponent/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import PostList from "@/Components/Organism/Post/PostList";

export default function PostListPage() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          내 문의글
        </TextStore>
      </Section>

      <PostList />
    </>
  );
}
