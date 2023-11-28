"use client";

import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import { useInfiniteQuery } from "react-query";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/components-kim/Section";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function ClientRequest() {
  const [ref, inView] = useInView();
  const [fetchData, setFetchData] = useState([]);

  // 참고자료
  //https://velog.io/@wmc1415/react-query%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-infinity-scroll-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

  const getData = async (pageParam: number): Promise<any> => {
    const size = 20;
    const lastPostId = 10000;
    console.log(pageParam);
    const res = await fetch(
      `${process.env.BASE_URL}/api/board?lastPostId=${
        lastPostId + pageParam
      }&size=${size}`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      return <> Loading ...</>;
    }

    const fetchData = await res.json();

    return fetchData;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["clientList"],
    ({ pageParam = 1 }) => getData(pageParam),
    {
      getNextPageParam: lastPage => lastPage.nextPage,
    },
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    console.log("data", data);
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>dial</TextStore>
      </Section>
      <Section style="mt-2.5">
        {fetchData.map((ListData, index) => {
          return (
            <div key={index} className="mt-2.5">
              <Link href={`/fundmanager/clientrequest/${ListData.postId}`}>
                <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
                  <TextStore
                    textStyle={TextStyle.TEXT_M_24}
                    style="text-black font-bold"
                  >
                    {ListData.name}
                  </TextStore>
                  <TextStore
                    textStyle={TextStyle.TEXT_R_20}
                    style="text-slate-500"
                  >
                    {ListData.title}
                  </TextStore>
                  <ChevronRight
                    fill="black"
                    width="2 in"
                    height="2m"
                    className="absolute top-1/3 right-0 "
                  />
                </BoxStore>
              </Link>
            </div>
          );
        })}
        <div ref={ref} />
      </Section>
    </>
  );
}
