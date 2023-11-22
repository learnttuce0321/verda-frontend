"use client"

import BoxStore from "@/Components/Atom/Box/BoxStore"
import { BoxStyle } from "@/Components/Atom/Box/BoxStore"
import Link from "next/link"

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-3">{children}</section>
  )
}

export default function UserMainPage() {
  return (
    <>
      <Section>
        <h1>안녕하세요</h1>
        <h1>USER01님!</h1>
      </Section>

      <Section>
        <div className="bg-white h-48"></div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-2">
          <Link href={"/user/write"}><BoxStore boxStyle={BoxStyle.BOX_SQUARE_ORANGE}>투자 문의 작성하기</BoxStore></Link>
          <Link href={"/user/rooms"}><BoxStore boxStyle={BoxStyle.BOX_SQUARE_NAVY}>채팅</BoxStore></Link>
          <Link href={"/user/post"}><BoxStore boxStyle={BoxStyle.BOX_SQUARE_MINT}>투자 글 보러가기</BoxStore></Link>
        </div>
      </Section >
    </>
  )
}
