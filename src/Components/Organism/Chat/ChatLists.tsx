// "use client";

import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import { useIntersectionObserver } from "@/utils/hooks/userIntersectionHook";

export default async function ChatLists() {
  // todos : useInfiniteQuery

  const getChatList = async (pageParam: number) => {
    const res = await fetch(`${process.env.BASE_URL}/api/rooms/user?page=${pageParam}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.IW5PjeG2JUgvN4BJHLG_5P4XnGACBJb_Y4fmj4-e7xY`
      }
    });

    return res.json();
  }
  const { content } = await getChatList(0)
  // const { content: chatList } = await getChatList({ pageParam: 0 })
  // console.log(chatList)

  // const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ["chatList"],
  //   ({ pageParam = 1 }: { pageParam: number }) => getChatList({ pageParam }),
  // )

  // queryKey: ['chatList'],
  // queryFn: ({ pageParam = 1 }: { pageParam: number }) => getChatList({ pageParam }),
  // const { setTarget } = useIntersectionObserver({
  //   threshold: 0.1, hasNextPage, fetchNextPage
  // });
  // const chatList = await getChatList()
  return (
    <section className="mt-2.5">
      <div className="flex items-center flex-col">
        {content.map((chat: any) => {
          console.log(chat)
          return (
            <Link href={`/user/rooms/${chat.roomId}`} key={chat.roomId}>
              <ButtonListInfo chat={chat} />
            </Link>
          );
        })}
      </div>
      {/* <div ref={setTarget} className="h-[1rem]" /> */}
    </section>
  )
}