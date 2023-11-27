import ClientRequestDetail from "@/organisms/fundmanager-kim/Client-request/ClientRequestDetail";

interface Props {
  params: {
    postid: string;
  };
}

const GetUserWriteData = async ({
  params: { postid },
}: Props): Promise<any> => {
  const userPost = await fetch(`${process.env.BASE_URL}/api/board/${postid}`, {
    method: "GET",
  });

  if (!userPost.ok) {
    console.log("error");
    return <div>is Loading...</div>;
  }

  return userPost.json();
};

const GetUserRoomData = async ({ params: { postid } }: Props): Promise<any> => {
  const userRoom = await fetch(`${process.env.BASE_URL}/api/rooms/${postid}`, {
    method: "GET",
  });

  if (!userRoom.ok) {
    console.log("error");
  } else if (!userRoom || Object.keys(userRoom).length === 0) {
    console.log(postid);
    return PostMakeRoom({ params: { postid } });
  }
};

const PostMakeRoom = async ({ params: { postid } }: Props): Promise<any> => {
  console.log("postid", postid);
  const makeRoom = await fetch(`${process.env.BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      fm_id: 1,
      user_id: 1,
      post_id: postid,
    }),
  });

  if (!makeRoom.ok) {
    console.log("error");
    return <div>is Loading...</div>;
  }
  return makeRoom.json();
};

export default async function ClientRequestDetailFun({ params }: Props) {
  const postData = await GetUserWriteData({ params });
  const roomData = await GetUserRoomData({ params });
  console.log("roomData", roomData);

  return <ClientRequestDetail postDetail={postData} roomData={roomData} />;
}
