"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ButtonListTitle from "@/Components/Molecure/Button-jsh/List/ButtonListTitle";

export default function PostList() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const getPostList = async (pageParam: (null | number) = 99999): Promise<any> => {
    const res = await fetch(`${process.env.BASE_URL}/api/board?lastPostId=${pageParam}&size=20`, {
      method: 'GET',
      // cache: 'no-store'
    });

    return res.json();
  };
  // const data = await getPostList(99999)
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['specialPostList'],
    ({ pageParam = 99999 }) => getPostList(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage[lastPage.length - 1].postId
        console.log(lastPage[lastPage.length - 1].postId)
        // console.log("?", allPages[0].slice(-1)[0].postId)
        return nextPage === 1 ? false : nextPage
      }
    }
  )

  useEffect(() => {
    console.log(hasNextPage)
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <section>
      <div className="flex items-center flex-col">
        {/* {
          data.map(d => {
            console.log(d)
            return (
              <>
                null</>
            )
          })
        } */}
        {
          data ? (
            data.pages.map((page, idx) => {
              return (
                <Fragment key={idx}>
                  {
                    page.map((post: any, id: number) => {
                      return (
                        <Link href={`/user/post/${post.postId}`} key={post.postId}>
                          <ButtonListTitle>
                            {post.title}
                          </ButtonListTitle>
                        </Link>
                      )
                    })
                  }
                </Fragment>
              )
            })
          ) : (
            <>
              loading
            </>
          )
        }
      </div>
      {hasNextPage && isFetchingNextPage && <>loading</>}
      <div ref={ref} className="h-[1rem]" />
    </section >
  )
}
