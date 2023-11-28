"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";

export default function ChatLists() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const GetChatList = async (pageParam: (null | number) = null) => {
    // 이세낀 진짜 뭐임?
    const res = await fetch(`https://verda.monster/api/rooms/user?page=${pageParam}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.IW5PjeG2JUgvN4BJHLG_5P4XnGACBJb_Y4fmj4-e7xY`
      },
      cache: "no-store"
    })

    return res.json();
  }

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['specialChatList'],
    ({ pageParam = 0 }) => GetChatList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = lastPage.total_count / 20;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
        // 다음 페이지를 호출할 때 사용 될 pageParam
      },
    }
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [data])

  return (
    <section className="mt-2.5">
      <div className="flex items-center flex-col">
        {isFetching ? (
          <>
            loading
          </>
        ) : (
          data?.pages.map((page, idx) => {
            console.log(page)
            return (
              <Fragment key={idx}>
                {
                  page.content.map((chat: any) => {
                    console.log(chat)
                    return (
                      <Link href={`/user/rooms/${chat.roomId}`} key={chat.roomId}>
                        <ButtonListInfo chat={chat} />
                      </Link>
                    );
                  })
                }
              </Fragment>
            )
          })
        )}
      </div>
      <div ref={ref} className="h-[1rem]" />
    </section>
  )
}