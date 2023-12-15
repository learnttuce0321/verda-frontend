"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListTitle from "@/Components/Molecure/Button-jsh/List/ButtonListTitle";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function PostList() {
  const [loginData, setLoginData] = useRecoilState(loginState)

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  //  ? loginData.authToken.accessToken : JSON.parse(localStorage.getItem("loginData") as string).authToken.accessToken

  /**
   * 게시글 불러오는 fetch함수
   * @param pageParam 게시글을 불러오는 page번호
   * @returns 
   */
  const getPostList = async (pageParam: (null | number) = null): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/user/board?page=${pageParam}&size=20`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loginData.authToken.accessToken}`
      },
    });

    return res.json();
  };

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['specialPostList'],
    ({ pageParam = 0 }) => getPostList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage
      }
    }
  )

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    };
  }, [inView]);

  return (
    <section>
      <div className="flex items-center flex-col">
        {
          data ? (
            data?.pages.map((page, idx) => {
              return (
                <Fragment key={idx}>
                  {
                    page?.content.map((post: any, id: number) => {
                      return (
                        <Link href={`/user/post/${post.postId}`} key={post.postId}>
                          <ButtonListTitle>
                            {post.title.length > 15 ? `${post.title.slice(0, 15)}...` : post.title}
                          </ButtonListTitle>
                        </Link>
                      )
                    })
                  }
                </Fragment>
              )
            })
          ) : (
            <TextStore textStyle={TextStyle.TEXT_R_24}>
              loading...
            </TextStore>
          )
        }
      </div>
      <div ref={ref} className="h-[1rem]" />
    </section >
  )
}
