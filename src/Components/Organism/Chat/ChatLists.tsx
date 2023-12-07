"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function ChatLists() {
  const [loginData, setLoginData] = useRecoilState(loginState)

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const GetChatList = async (pageParam: (null | number) = null) => {
    const res = await fetch(`${process.env.BASE_URL}/api/rooms/user?page=${pageParam}&size=20`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loginData.authToken.accessToken ? loginData.authToken.accessToken : JSON.parse(localStorage.getItem("loginData") as string).authToken.accessToken}`
      }
    })
    return res.json();
  }

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['specialChatListUser'],
    ({ pageParam = 0 }) => GetChatList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage
      },
    }
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <section className="mt-2.5">
      <div className="flex items-center flex-col">
        {
          data ? (
            data?.pages.map((page, idx) => {
              return (
                <Fragment key={idx}>
                  {
                    page.content && (
                      page.content.map((chat: any, id: number) => {
                        return (
                          <Link href={`/user/rooms/${chat.roomId}`} key={`${chat.roomId} + ${id}`}>
                            <ButtonListInfo chat={chat} />
                          </Link>
                        );
                      })
                    )
                  }
                </Fragment>
              )
            })
          ) : (
            <>
              loading...
            </>
          )
        }
      </div>
      <div ref={ref} className="h-[1rem]" />
    </section>
  )
}