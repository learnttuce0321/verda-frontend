"use client";

import { useRef } from "react";
import { notFound, useRouter } from "next/navigation";
import ButtonButtonNavy from "@/Components/Molecure/Button/Button/ButtonButtonNavy";
import InputContent from "@/Components/Molecure/Input/InputContent";
import InputTitle from "@/Components/Molecure/Input/InputTitle";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";

export default function ReviewWrite() {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [loginData, setLoginData] = useRecoilState(loginState);

  const SubmitHandler = async (): Promise<any> => {
    const titleInput = titleRef.current!.value;
    const contentInput = contentRef.current!.value;

    const postData = {
      title: titleInput,
      content: contentInput,
    };

    const res = await fetch(`${process.env.BASE_URL}/api/board`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${loginData.authToken.accessToken}`,
      },
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      notFound();
    }

    router.push("/user");
  };
  return (
    <>
      <section className="flex flex-col my-3">
        <InputTitle ref={titleRef} />
        <InputContent
          ref={contentRef}
          placeHolder="투자후기를 작성해주세요"
          rows={23}
        />
      </section>

      <section className="mt-5">
        <button type="button">
          <ButtonButtonNavy clickHandler={SubmitHandler} style="p-2">
            작성완료
          </ButtonButtonNavy>
        </button>
      </section>
    </>
  );
}
