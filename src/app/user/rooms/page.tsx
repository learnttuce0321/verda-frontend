"use client"
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";

const CHATLIST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: '주상후',
    firstMessage: '안녕하세요. 저는 펀드매니저 주상후 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  },
  {
    id: 2,
    fundManagerName: '손영석',
    firstMessage: '안녕하세요. 저는 펀드매니저 손영석 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  },
  {
    id: 3,
    fundManagerName: '김미리',
    firstMessage: '안녕하세요. 저는 펀드매니저 김미리 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
  }
]

export default function ChatList() {
  return (
    <>
      <section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>채팅</TextStore>
      </section>
      <section>
        <div className="flex items-center flex-col">
          {
            CHATLIST_DUMMYDATA.map(chat => {
              return (
                <Link href={`/user/rooms/${chat.id}`} key={chat.id}>
                  <ButtonListInfo chat={chat} />
                </Link>
              )
            })
          }
        </div>
      </section>
    </>
  )
}