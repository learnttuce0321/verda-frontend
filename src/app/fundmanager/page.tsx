"use client";

import Link from "next/link";
import Section from "@/components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { ChatLeftDotsFill, PenFill } from "react-bootstrap-icons";

const postid = 1;

export default function FundmanagerLayout() {
  return (
    <>
      <Section style=" text-2xl font-semibold">
        <TextStore textStyle={TextStyle.TEXT_R_40}> 안녕하세요</TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_40} style="text-custom_skyblue">
          fundmanager01
          <span className="text-white">님!</span>
        </TextStore>
      </Section>

      <div className="grid grid-cols-2 gap-2">
        <button type="button" name="투자 글" className="text-left">
          <Link href="/fundmanager/clientrequest">
            <BoxStore boxStyle={BoxStyle.BOX_SQUARE_WHITE} style="relative">
              <div className="absolute bottom-[1.25rem] right-[1.25rem]">
                <TextStore textStyle={TextStyle.TEXT_M_24} style="text-custom_orange">
                  투자문의
                </TextStore>
                <TextStore textStyle={TextStyle.TEXT_M_24} style="text-custom_navy">
                  보러가기
                </TextStore>
              </div>

              <div className="w-[37px] h-[37px] border-[1px] border-black rounded-full flex justify-center items-center absolute">
                <PenFill className="text-black" />
              </div>
            </BoxStore>
          </Link>
        </button>

        <button type="button" name="투자 글" className="text-left">
          <Link href="/fundmanager/rooms">
            <BoxStore boxStyle={BoxStyle.BOX_SQUARE_ORANGE} style="relative">
              <div className="absolute bottom-[1.25rem] right-[1.25rem]">
                <TextStore textStyle={TextStyle.TEXT_M_24} style="text-custom_navy">
                  채팅
                </TextStore>
              </div>
              <div className="w-[37px] h-[37px] border-[1px] border-black rounded-full flex justify-center items-center absolute">
                <ChatLeftDotsFill className="text-black" />
              </div>
            </BoxStore>
          </Link>
        </button>
      </div >
    </>
  );
}
