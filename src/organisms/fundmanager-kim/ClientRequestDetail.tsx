import Link from "next/link";
import Section from "@/Components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  postId: string;
  name: string;
  title: string;
  content: string;
}

interface ClientRequestDetailProps {
  postDetail: Props;
}

export default function RequestDetail({
  postDetail,
}: ClientRequestDetailProps) {
  console.log(postDetail);
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>
          {postDetail && postDetail.title}
        </TextStore>
      </Section>
      <Section>
        <BoxStore boxStyle={BoxStyle.BOX_CORNER_LARGE} style="h-96 ">
          <TextStore textStyle={TextStyle.TEXT_M_24} style="text-black">
            <span className="font-bold">{postDetail && postDetail.name}</span>
          </TextStore>
          <TextStore textStyle={TextStyle.TEXT_R_20} style="text-black">
            <span className="font-bold">제목: </span>
            {postDetail && postDetail.title}
          </TextStore>
          <br />
          <TextStore textStyle={TextStyle.TEXT_R_20} style="text-black">
            <span className="font-bold">내용: </span>
            {postDetail && postDetail.content}
          </TextStore>
        </BoxStore>

        {/* <Link href={`/fundmanager/rooms/${posts && posts.roomId}`}> */}
        <BoxStore
          boxStyle={BoxStyle.BOX_RECTANGLE_LONG_ORANGE}
          style="text-center mt-3.5 "
        >
          <TextStore textStyle={TextStyle.TEXT_S_32_BLUE}>
            제안서 작성하기
          </TextStore>
        </BoxStore>
        {/* </Link> */}
      </Section>
    </>
  );
}
