import Link from "next/link";
import ButtonListTitle from "@/Components/Molecure/Button-jsh/List/ButtonListTitle";

export default async function PostList() {
  // todos : 무한 스크롤
  const getPostList = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board?lastPostId=10000&size=20`, {
      method: 'GET',
      cache: 'no-store'
    });

    return res.json();
  };

  const postList: Array<SummarizedPost> = await getPostList();
  return (
    <section>
      {postList.map((post) => {
        return (
          <Link href={`/user/post/${post.postId}`} key={post.postId}>
            <ButtonListTitle>
              {post.title}
            </ButtonListTitle>
          </Link>
        );
      })}
    </section>
  )
}