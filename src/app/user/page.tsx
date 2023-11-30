"use client";

import Link from "next/link";
import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

export default function UserMainPage() {
  return (
    <>
      <Section>
        <TextStore textStyle={TextStyle.TEXT_R_40}>안녕하세요</TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>
          USER01<span className="text-black">님!</span>
        </TextStore>
      </Section>

      <Section>
        <div className="bg-white h-48" />
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" name="투자 문의" className="text-left">
            <Link href="/user/write">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_ORANGE}>투자 문의 작성하기</BoxStore>
            </Link>
          </button>
          <button type="button" name="문의" className="text-left">
            <Link href="/user/rooms">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_NAVY}>채팅</BoxStore>
            </Link>
          </button>
          <button type="button" name="투자 글" className="text-left">
            <Link href="/user/post">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_MINT}>투자 글 보러가기</BoxStore>
            </Link>
          </button>
        </div>
      </Section >
    </>
  );
}
