import ClientRequestDetail from "@/Components/Organism/Client-request/ClientRequestDetail";

interface Props {
  params: {
    postId: string;
  };
}

const GetclientRequestListData = async ({
  params: { postId },
}: Props): Promise<any> => {
  const userPost = await fetch(`${process.env.BASE_URL}/api/board/${postId}`, {
    method: "GET",
  });

  if (!userPost.ok) {
    console.log("error");
    return <>is Loading...</>;
  }

  return userPost.json();
};

const PostMakeRoom = async ({ params: { postId } }: Props): Promise<any> => {
  console.log("postid", postId);
  const makeRoom = await fetch(`${process.env.BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      fm_id: 1,
      user_id: 1,
      post_id: postId,
    }),
  });

  if (!makeRoom.ok) {
    console.log("error");
    return <>is Loading...</>;
  }
  return makeRoom.json();
};

const GetUserRoomData = async ({ params: { postId } }: Props): Promise<any> => {
  const userRoom = await fetch(`${process.env.BASE_URL}/api/rooms/${postId}`, {
    method: "GET",
  });

  if (!userRoom.ok) {
    console.log("error");
  } else if (!userRoom || Object.keys(userRoom).length === 0) {
    console.log(postId);
    const result = await PostMakeRoom({ params: { postId } });
    return result;
  }
};

export default async function ClientRequestDetailFun({ params }: Props) {
  const postData = await GetclientRequestListData({ params });
  const roomData = await GetUserRoomData({ params });
  console.log("roomData", roomData);

  return <ClientRequestDetail postDetail={postData} roomData={roomData} />;
}
