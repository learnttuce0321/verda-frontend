"use client";

import { useRef } from "react";
import { notFound, useRouter } from "next/navigation";
import ButtonButtonNavy from "@/Components/Molecure/Button-jsh/Button/ButtonButtonNavy";
import InputContent from "@/Components/Molecure/Input-jsh/InputContent";
import InputTitle from "@/Components/Molecure/Input-jsh/InputTitle";

export default function WriteInput() {
  const router = useRouter()
  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const SubmitHandler = async (): Promise<any> => {
    const titleInput = titleRef.current!.value;
    const contentInput = contentRef.current!.value;

    const postData = {
      title: titleInput,
      content: contentInput
    }

    const res = await fetch(`https://verda.monster/api/board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.IW5PjeG2JUgvN4BJHLG_5P4XnGACBJb_Y4fmj4-e7xY"
      },
      body: JSON.stringify(postData)
    })

    if (!res.ok) {
      notFound()
    }

    router.push('/user')
  }
  return (
    <>
      <section className="flex flex-col my-3">
        <InputTitle ref={titleRef} />
        <InputContent
          ref={contentRef}
          placeHolder="투자관련 문의를 작성해주세요"
          rows={23} />
      </section>

      <section className="mt-5">
        <button type="button">
          <ButtonButtonNavy clickHandler={SubmitHandler}>
            작성완료
          </ButtonButtonNavy>
        </button>
      </section>
    </>
  )
}