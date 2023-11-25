import Link from "next/link";
import { ChevronRight } from "react-bootstrap-icons";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Section from "@/Components-kim/Section";

interface Props {
  postId: string;
  name: string;
  title: string;
}

interface ClientRequestProps {
  posts: Props[];
}

export default async function ClientRequest({ posts }: ClientRequestProps) {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>투자문의</TextStore>
      </Section>
      <Section style="mt-2.5">
        {posts.map(data => (
          <div key={data.postId} className="mt-2.5">
            <Link href={`/fundmanager/clientrequest/${data.postId}`}>
              <BoxStore boxStyle={BoxStyle.BOX_CORNER_LONG} style="relative">
                <TextStore
                  textStyle={TextStyle.TEXT_M_24}
                  style="text-black font-bold"
                >
                  {data.name}
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
