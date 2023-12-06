import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonButtonNavy from "@/Components/Molecure/Button-jsh/Button/ButtonButtonNavy";
import ClientRequestDetail from "@/Components/Organism/Client-request/ClientRequestDetail";
import PostDetailChatList from "@/Components/Organism/Post/PostDetailChatList";
import PostDetailMain from "@/Components/Organism/Post/PostDetailMain";
import { useInView } from "react-intersection-observer";

interface Props {
  params: {
    postid: string;
  };
}
//-----------------son------------------
export default async function RequestDetailPage({ params: { postid } }: Props) {
  const getRequestDetail = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/${postid}`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  };
  // todos : 타입지정
  const request = await getRequestDetail();

  return (
    <>
      <section className="text-black">
        <TextStore
          textStyle={TextStyle.TEXT_R_40_BLUE}
          style="text-white mb-[2.5rem]"
        >
          {request.title}
        </TextStore>

        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_WHITE}
          style="h-[calc(80vh_-_144px)]"
        >
          <TextStore textStyle={TextStyle.TEXT_R_24}>
            {request.content}
          </TextStore>
        </BoxStore>

        <button type="button" className="mt-5">
          <ButtonButtonNavy style="p-2">제안서 작성하기</ButtonButtonNavy>
        </button>
      </section>
    </>
  );
}

//-------------------

// const GetclientRequestListData = async ({
//   params: { postId },
// }: Props): Promise<any> => {
//   const userPost = await fetch(`${process.env.BASE_URL}/api/board/${postId}`, {
//     method: "GET",
//   });

//   if (!userPost.ok) {
//     console.log("error");

//     return <>is Loading...</>;
//   }

//   return userPost.json();
// };

// const PostMakeRoom = async ({ params: { postId } }: Props): Promise<any> => {
//   console.log("postId", postId);

//   const makeRoom = await fetch(`${process.env.BASE_URL}/api/chat`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({
//       fm_id: 1,
//       user_id: 1,

//       post_id: postId,
//     }),
//   });

//   return makeRoom.json();
// };

// const GetUserRoomData = async ({ params: { postId } }: Props): Promise<any> => {
//   const userRoom = await fetch(`${process.env.BASE_URL}/api/rooms/${postId}`, {
//     method: "GET",
//   });

//   if (!userRoom.ok) {
//     console.log("error");
//   } else if (!userRoom || Object.keys(userRoom).length === 0) {
//     console.log(postId);
//     return PostMakeRoom({ params: { postId } });
//   }
// };

// export default async function ClientRequestDetailFun({ params }: Props) {
//   const postData = await GetclientRequestListData({ params });

//   const roomData = await GetUserRoomData({ params });
//   console.log("roomData", roomData);

//   return <ClientRequestDetail postDetail={postData} roomData={roomData} />;
// }
