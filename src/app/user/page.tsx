import Link from "next/link";
import Section from "@/Components-kim/Section";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import { CashCoin, ChatLeftDotsFill, PenFill } from "react-bootstrap-icons";
import UserName from "@/Component-son/UserName";
import InvestmentTypeUpdate from "@/Component-son/InvestmentTypeUpdate";
export default function UserMainPage() {
  return (
    <>
      <UserName />
      <Section>
        {/* <div className="bg-white "> */}
        <InvestmentTypeUpdate />
        {/* </div> */}
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <button type="button" name="투자 문의" className="text-left">
            <Link href="/user/write">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_NAVY} style="relative">
                <div className="absolute bottom-[1.25rem] right-[1.25rem]">
                  <TextStore
                    textStyle={TextStyle.TEXT_M_24}
                    style="text-custom_orange"
                  >
                    투자문의
                  </TextStore>
                  <TextStore textStyle={TextStyle.TEXT_M_24} style="text-white">
                    작성하기
                  </TextStore>
                </div>

                <div className="w-[37px] h-[37px] border-[1px] border-black rounded-full flex justify-center items-center">
                  <PenFill className="text-black" />
                </div>
              </BoxStore>
            </Link>
          </button>

          <button type="button" name="문의" className="text-left">
            <Link href="/user/rooms">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_ORANGE} style="relative">
                <div className="absolute bottom-[1.25rem] right-[1.25rem]">
                  <TextStore
                    textStyle={TextStyle.TEXT_M_24}
                    style="text-custom_navy"
                  >
                    채팅
                  </TextStore>
                </div>

                <div className="w-[37px] h-[37px] border-[1px] border-black rounded-full flex justify-center items-center">
                  <ChatLeftDotsFill className="text-black" />
                </div>
              </BoxStore>
            </Link>
          </button>

          <button type="button" name="투자 글" className="text-left">
            <Link href="/user/post">
              <BoxStore boxStyle={BoxStyle.BOX_SQUARE_MINT} style="relative">
                <div className="absolute bottom-[1.25rem] right-[1.25rem]">
                  <TextStore
                    textStyle={TextStyle.TEXT_M_24}
                    style="text-custom_navy"
                  >
                    투자 글
                  </TextStore>
                  <TextStore textStyle={TextStyle.TEXT_M_24}>
                    보러가기
                  </TextStore>
                </div>

                <div className="w-[37px] h-[37px] border-[1px] border-black rounded-full flex justify-center items-center">
                  <CashCoin className="text-black" />
                </div>
              </BoxStore>
            </Link>
          </button>
        </div>
      </Section>
    </>
  );
}
