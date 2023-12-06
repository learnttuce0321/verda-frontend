"use client";

import Link from "next/link";
import Section from "@/Components-kim/Section";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { Fragment, useEffect } from "react";
import ButtonListInfo from "@/Components/Molecure/Button-jsh/List/ButtonListInfo";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";


export default function FundmanagerChatList() {
  const [loginData, setLoginDate] = useRecoilState(loginState)
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const GetChatList = async (pageParam: (null | number) = null) => {
    console.log(`Bearer ${loginData.authToken.accessToken}`)
    const res = await fetch(`https://verda.monster/api/rooms/fm?page=${pageParam}&size=20`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loginData.authToken.accessToken}`
      },
      cache: "no-store"
    })
    console.log(`${process.env.BASE_URL}/api/rooms/fm?page=${pageParam}&size=20`)
    return res.json();
  }

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['specialChatListFm'],
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
    <Section>
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
                          <Link href={`/fundmanager/rooms/${chat.roomId}`} key={`${chat.roomId} + ${id}`} className="!text-black">
                            <ButtonListInfo chat={chat} />
                          </Link>
                        )
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
    </Section>
  );
}
