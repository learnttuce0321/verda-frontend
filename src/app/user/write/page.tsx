"use client"

import { useRouter } from "next/navigation";
import { useRef } from "react"

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

    router.push('/user');
  }

  return (
    <>
      <h1 className="mb-2">투자문의 작성하기</h1>
      <section className="flex flex-col">
        <input type="text" className="mb-4" ref={titleRef} />
        <textarea rows={5} ref={contentRef} />
      </section>
      <button type="button" onClick={SubmitHandler}>작성완료</button>
    </>
  )
}