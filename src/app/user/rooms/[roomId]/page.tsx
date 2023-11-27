import { notFound } from "next/navigation";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  params: {
    roomId: string;
  };
};

export default async function ChatDetailPage({ params: { roomId } }: Props) {
  const getChat = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/chat/${roomId}`, {
      method: "GET",
    });

    return res.json()
  }
  const { preChatList: chats } = await getChat()

  return (
    <section className="w-[100%] ">
      <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-2">
        {/* {data?.fundManagerName} */}
      </TextStore>
      <div className="border-2 opacity-100 h-[calc(100vh_-_126px)] overflow-y-scroll">
        {/* todos : 이거 백엔드랑 연결 후 설정해야됨 */}
      </div>
      {/* </section> */}
      {/* todos: input 생성해야됨 */}
    </section>
  );
}
