"use client";

import { useRef } from "react"
import { useRouter } from "next/navigation";
import Section from "@/components-kim/Section";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonButtonNavy from "@/Components/Molecure/Button-jsh/Button/ButtonButtonNavy";
import InputContent from "@/Components/Molecure/Input-jsh/InputContent";
import InputTitle from "@/Components/Molecure/Input-jsh/InputTitle";

export default function WritePostPage() {
  const router = useRouter()
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const SubmitHandler = (): void => {
    const titleInput = titleRef.current!.value;
    const contentInput = contentRef.current!.value;

    const postData = {
      title: titleInput,
      content: contentInput
    }

    console.log(postData)
    // router.push('/user');
  }

  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE} style="mb-[2.5rem]">
          투자문의 작성하기
        </TextStore>
      </Section>

      <section className="flex flex-col my-3">
        <InputTitle ref={titleRef} />
        <InputContent
          ref={contentRef}
          placeHolder="투자관련 문의를 작성해주세요"
          rows={23} />
      </section>

      <section className="mt-5">
        <ButtonButtonNavy>
          작성완료
        </ButtonButtonNavy>
      </section>
    </>
  );
}
