import Link from "next/link";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  postId: string
};

export default async function PostDetailChatList({ postId }: Props) {
  const getChatList = async (): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/rooms/${postId}`, {
      method: 'GET'
    });

    return res.json();
  };

  const chatList: Array<SummarizedChat> = await getChatList()

  return (
    <section className="pb-5">
      <div className="flex items-center flex-col">
        {
          chatList.length !== 0 ? (
            chatList.map(chat => {
              return (
                <Link href={`/user/rooms/${chat.roomId}`} key={chat.roomId}>
                  <ButtonListInfo chat={chat} />
                </Link>
              );
            })
          ) : (
            <TextStore textStyle={TextStyle.TEXT_R_24} style="mt-3 text-custom_navy">
              답변이 달리지 않았습니다.
            </TextStore>
          )
        }
      </div>
    </section>
  )
}