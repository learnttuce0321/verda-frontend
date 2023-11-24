// "use client";

import Link from "next/link";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";

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
  },
];

export default async function ChatList() {
  // const foo = async () => {
  //   const data = await fetch(process.env.BASE_URL + '/api/board?lastPostId=10000&size=20', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   })
  //   return data.json()
  // }
  // console.log('foo', await foo())

  // const fetchRoomsData = async () => {
  //   console.log(process.env.BASE_URL + '/api/rooms/user')
  //   const res = await fetch(process.env.BASE_URL + '/api/rooms/user', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.URLhLSHcG1kKs9kgfoFYBg8pBpFNs21xv169aDSBGNU"
  //     }
  //   })
  //   return res.json()
  // }

  const Chat = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/rooms/user`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.IW5PjeG2JUgvN4BJHLG_5P4XnGACBJb_Y4fmj4-e7xY"
      },
    })
    return res.json()
  }
  console.log("Chat", await Chat())

  // const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery<any>({
  //   queryKey: ['rooms'],
  //   queryFn: () => { },
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor
  // })
  // const { setTarget } = useIntersectionObserver({
  //   threshold: 0.1,
  //   hasNextPage,
  //   fetchNextPage,
  // })
  return (
    <>
      <section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>채팅</TextStore>
      </section>
      <section>
        <div className="flex items-center flex-col">
          {CHATLIST_DUMMYDATA.map(chat => {
            return (
              <Link href={`/user/rooms/${chat.id}`} key={chat.id}>
                <ButtonListInfo chat={chat} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
