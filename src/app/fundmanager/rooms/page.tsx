import FundmanagerChatList from "@/organisms/fundmanager-kim/Rooms/Rooms";

interface TokenProps {
  token: string;
}

// { token }: TokenProps


export default function FundmanagerRoomsInfo() {
  const getRoomsData = async (): Promise<any> => {
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

  const CheckFundmanagerRooms = getRoomsData();
  return <FundmanagerChatList />;
}
