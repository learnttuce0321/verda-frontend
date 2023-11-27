<<<<<<< Updated upstream
"use client";

import Link from "next/link";
import Section from "@/components-kim/Section";
=======
import Section from "@/Components-kim/Section";
>>>>>>> Stashed changes
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonListTitle from "@/Components/Molecure/Button-jsh/List/ButtonListTitle";

const POST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: "주상후",
    title: "미국 주식 투자 문의",
  },
  {
    id: 2,
    fundManagerName: "손영석",
    title: "미국 펀드 투자 문의",
  },
];

export default function PostListPage() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          내 문의글
        </TextStore>
      </Section>
      <section>
        {POST_DUMMYDATA.map(post => {
          return (
            <Link href={`/user/post/${post.id}`} key={post.id}>
              <ButtonListTitle>
                {post.title}
              </ButtonListTitle>
            </Link>
          )
        })}
      </section>
    </>
  );
}
