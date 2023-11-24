"use client";

import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
<<<<<<< Updated upstream
import Section from "@/components-kim/Section";
=======
import { ChevronRight } from "react-bootstrap-icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import Section from "@/Components-kim/Section";
import { useEffect } from "react";
>>>>>>> Stashed changes

interface Props {
  postId: string;
  name: string;
  title: string;
}

interface ClientRequestProps {
  posts: Props[];
}

const getData = async (page = 1) => {
  const data = await fetch(process.env.BASE_URL + `/api/board/${page}`);

  if (!data.ok) {
    console.log("error");
  } else {
    console.log(data);
  }

  return data.json();
};

const USER_DUMMYDATA = [
  {
    id: 1,
    userName: "주상후",
    filmId: 1,
    title: "미국 주식투자 문의",
    firstMessage: "내용1",
    roomId: 1,
  },
  {
    id: 2,
    userName: "김aa",
    filmId: 2,
    title: "국내 주식투자 문의",
    firstMessage: "내용2",
    roomId: 2,
  },
];

<<<<<<< Updated upstream
// {posts}: ClientRequestProps
export default function ClientRequest(): JSX.Element {
  const userData = USER_DUMMYDATA;

=======
export default async function ClientRequest({ posts }: ClientRequestProps) {
  const userData = USER_DUMMYDATA;

  // const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
  //   ["postScroll"],
  //   ({ pageParam = 1 }) => getData(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       const maxPages = lastPage.total_count / 30;
  //       const nextPage = allPages.length + 1;
  //       return nextPage <= maxPages ? nextPage : undefined;
  //     },
  //   },
  // );

  // useEffect(() => {
  //   let fetching = false;
  //   const onScroll = async event => {
  //     const { scrollHeight, scrollTop, clientHeight } =
  //       event.target.scrollingElement;

  //     if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
  //       fetching = true;
  //       if (hasNextPage) await fetchNextPage();
  //       fetching = false;
  //     }
  //   };

  //   document.addEventListener("scroll", onScroll);
  //   return () => {
  //     document.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  // console.log(data);

>>>>>>> Stashed changes
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
      </Section>
      <Section>
<<<<<<< Updated upstream
        {userData.map(data => (
          <div key={data.id} className="mt-2.5">
            <Link href={`/fundmanager/clientrequest/${data.id}`}>
              <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
=======
        {userData.map(userData => (
          <div key={userData.id} className="mt-2.5">
            <Link href={`/fundmanager/clientrequest/${userData.id}`}>
              <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative ">
>>>>>>> Stashed changes
                <TextStore
                  textStyle={TextStyle.TEXT_M_24}
                  style="text-black font-bold"
                >
                  {data.userName}
                </TextStore>
                <TextStore
                  textStyle={TextStyle.TEXT_R_20}
                  style="text-slate-500"
                >
                  {data.title}
                </TextStore>
                <ChevronRight
                  fill="black"
                  width="2em"
                  height="2em"
                  className="absolute top-1/3 right-0 "
                />
              </BoxStore>
            </Link>
          </div>
        ))}
      </Section>
    </>
  );
}
