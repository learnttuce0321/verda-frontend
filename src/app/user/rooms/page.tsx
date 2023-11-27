// "use client";

import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ChatLists from "@/Components/Organism/Chat/ChatLists";

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

  // todos : useInfiniteQuery

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

      <ChatLists />
    </>
  );
}
