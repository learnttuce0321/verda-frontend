import ClientRequestDetail from "@/organisms/fundmanager-kim/ClientRequestDetail";

interface Props {
  params: {
    postid: string;
  };
}

const GetUserWriteData = async ({
  params: { postid },
}: Props): Promise<any> => {
  console.log(postid);
  const userPost = await fetch(`${process.env.BASE_URL}/api/board/${postid}`, {
    method: "GET",
  });

  if (!userPost.ok) {
    console.log("error");
    return <div>is Loading...</div>;
  }

  return userPost.json();
};

const PostMakeRoom = async ({ params: { postid } }: Props): Promise<any> => {
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

  const GetUserRoomData = async ({
    params: { postid },
  }: Props): Promise<any> => {
    console.log(postid);
    const userRoom = await fetch(
      `${process.env.BASE_URL}/api/rooms/${postid}`,
      {
        method: "GET",
      },
    );

    if (!userRoom.ok) {
      console.log("error");
    } else if (!userRoom || Object.keys(userRoom).length === 0) {
      await PostMakeRoom(postid);
    }
    return userRoom.json();
  };

  if (!makeRoom.ok) {
    console.log("error");
    return <div>is Loading...</div>;
  }
};

export default async function ClientRequestDetailFun({ params }: Props) {
  const postData = await GetUserWriteData({ params });
  console.log(postData);

  return <ClientRequestDetail postDetail={postData} />;
}
