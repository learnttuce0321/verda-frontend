
import ClientRequestDetail from "@/Components/Organism/Client-request/ClientRequestDetail";


interface Props {
  params: {
    postid: string;
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


const GetUserRoomData = async ({ params: { postId } }: Props): Promise<any> => {
  const userRoom = await fetch(`${process.env.BASE_URL}/api/rooms/${postId}`, {
    method: "GET",
  });

  if (!userRoom.ok) {
    console.log("error");
  } else if (!userRoom || Object.keys(userRoom).length === 0) {
    console.log(postid);
    return PostMakeRoom({ params: { postId } });
  }
};

const PostMakeRoom = async ({ params: { postId } }: Props): Promise<any> => {
  console.log("postId", postId);

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
