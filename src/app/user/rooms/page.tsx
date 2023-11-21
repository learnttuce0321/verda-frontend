"use client"
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
        <h1>채팅</h1>
        {
          CHATLIST_DUMMYDATA.map(chat => {
            return (
              <Link href={`/user/rooms/${chat.id}`} key={chat.id}>
                <div key={chat.id} className="flex mx-10 my-5 bg-white p-3 rounded-lg justify-between">

                  <div className="flex ">
                    <img src="" alt="사진" />
                    <div>
                      <h3>{chat.fundManagerName}</h3>
                      <p>{chat.firstMessage.length > 15 ? chat.firstMessage.slice(0, 15) + "..." : chat.firstMessage}</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <ChevronRight />
                  </div>
                </div>
              </Link>
            )
          })
        }
      </section>
    </>
  )
}