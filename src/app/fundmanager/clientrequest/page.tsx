import Section from "@/Components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ClientRequerstList from "@/Component-son/ClientRequestList";

export default async function ClientRequestData() {
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

  return <ClientRequerstList />;
}
