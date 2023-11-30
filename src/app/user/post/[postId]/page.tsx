import Section from "@/components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import PostDetailMain from "@/Components/Organism/Post/PostDetailMain";
import PostDetailChatList from "@/Components/Organism/Post/PostDetailChatList";

interface Props {
  params: {
    postId: string;
  };
}

export default async function PostDetailPage({ params: { postId } }: Props) {
  const getPostDetail = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/${postId}`, {
      method: 'GET',
      cache: "no-store"
    });

    return res.json();
  };

  // todos : 타입지정
  const post = await getPostDetail()

  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          {post.title}
        </TextStore>
      </Section>

      <PostDetailMain post={post} />

      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mt-[2.5rem]">
          제안서 목록
        </TextStore>
      </Section>

      <PostDetailChatList postId={postId} />
    </>
  );
}
