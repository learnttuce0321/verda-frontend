import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import { useInfiniteQuery, InfiniteQueryObserverResult } from "react-query";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/components-kim/Section";

interface Props {
  postId: string;
  name: string;
  title: string;
}

interface ClientRequestProps {
  posts: Props[];
  pageNum: number;
  getData: (pageNum: ClientRequestProps) => Promise<any>;
}

export default async function ClientRequest({
  // posts,
  getData,
  pageNum,
}: ClientRequestProps) {
  function InfiniteScrollFun() {
    const fetchList = ({ pageParam = 1 }) => getData({ pageNum: pageParam });

    const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status,
    } = useInfiniteQuery("clientRequestList", fetchList, {
      getNextPageParam: (lastPage, pages) => {
        console.log(lastPage);

        if (lastPage.currentPage === lastPage.totalPage) return undefined;
        return lastPage.currentPage + 1;
      },
    });

    function handleScroll(event: { target: any }) {
      const element = event.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        if (hasNextPage) {
          fetchNextPage();
        }
      }
    }

    return (
      <>
        <Section>
          <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
        </Section>
        <Section style="mt-2.5">
          {posts.map(Listdata => (
            <div key={Listdata.postId} className="mt-2.5">
              <Link href={`/fundmanager/clientrequest/${Listdata.postId}`}>
                <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
                  <TextStore
                    textStyle={TextStyle.TEXT_M_24}
                    style="text-black font-bold"
                  >
                    {Listdata.name}
                  </TextStore>
                  <TextStore
                    textStyle={TextStyle.TEXT_R_20}
                    style="text-slate-500"
                  >
                    {Listdata.title}
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
}
