import FundmanagerChatList from "@/organisms/fundmanager-kim/Rooms/Rooms";

interface TokenProps {
  token: string;
}

const getRoomsData = async ({ token }: TokenProps): Promise<any> => {
  const res = await fetch(`${process.env.BASE_URL}/api/rooms/fm/`, {
    method: "GET",
    headers: {
      // Authorization: "Bearer" + localStorage.getItem("access_token"),
    },
  });

  if (!res.ok) {
    return <p>Loading...</p>;
  }

  return res.json();
};

export default function FundmanagerRoomsInfo({ token }: TokenProps) {
  const CheckFundmanagerRooms = getRoomsData({ token });
  return <FundmanagerChatList />;
}
