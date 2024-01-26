import Section from "@/Components/_LayoutComponent/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import PostDetailMain from "@/Components/Organism/Post/PostDetailMain";
import PostDetailChatList from "@/Components/Organism/Post/PostDetailChatList";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import Link from "next/link";

interface Props {
  params: {
    postId: string;
  };
}

export default async function PostDetailPage({ params: { postId } }: Props) {
  const getPostDetail = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/${postId}`, {
      method: "GET",
    });

    return res.json();
  };

  const post = await getPostDetail();

  return (
    <>
      <Section style="flex justify-between ">
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          {post.title.length > 5 ? `${post.title.slice(0, 5)}...` : post.title}
        </TextStore>
        <div>
          <Link href="/user/reviewWrite">
            <BoxStore
              boxStyle={BoxStyle.BOX_RECTANGLE_NAVY}
              style="rounded-3xl w-full"
            >
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-white text-center"
              >
                <button type="submit">후기 작성하기</button>
              </TextStore>
            </BoxStore>
          </Link>
        </div>
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
};
