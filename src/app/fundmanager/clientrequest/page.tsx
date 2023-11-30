import ClientRequest from "@/Components/Organism/Client-request/ClientRequest";

const size = 20;
const lastPostId = 10000;
const getData = async (): Promise<any> => {

  const res = await fetch(
    `${process.env.BASE_URL}/api/board?lastPostId=${lastPostId}&size=${size}`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {

    return <>Loading...</>;

  }

  return res.json();
};



export default async function ClientRequestData() {
  const data = await getData();
  // const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
  //   ["postScroll"],
  //   pageParam => getData(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       const maxPages = lastPage.total_count / 30;
  //       const nextPage = allPages.length + 1;
  //       return nextPage <= maxPages ? nextPage : undefined;
  //     },
  //   },
  // );

  // let fetching = false;
  // const onScroll = async event => {
  //   const { scrollHeight, scrollTop, clientHeight } =
  //     event.target.scrollingElement;

  //   if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
  //     fetching = true;
  //     if (hasNextPage) await fetchNextPage();
  //     fetching = false;
  //   }

  //   document.addEventListener("scroll", onScroll);
  //   return () => {
  //     document.removeEventListener("scroll", onScroll);
  //   };
  // };

  return <ClientRequest posts={data} />;

}
