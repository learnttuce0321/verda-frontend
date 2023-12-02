import React from "react";
import FundManagers from "./Fundmanagers";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

function Contents() {
  const imageAnimationStyle = `
    .image-animation {
      animation: fadeInTranslate 100s ease-out forwards;
    }

    @keyframes fadeInTranslate {
      0% {

        transform: translateX(40%);
      }
      100% {
        transform: translateX(-50%); 
      }
    }
  `;

  return (
    <>
      <style>{imageAnimationStyle}</style>
      <div className="w-[24.75rem]">
        <div className="mt-10">
          <div className="flex">
            <TextStore textStyle={TextStyle.TEXT_R_40} style="mr-2">
              투자는
            </TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>신중</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_40}>하게</TextStore>
          </div>
          <div className="flex">
            <TextStore textStyle={TextStyle.TEXT_R_40} style="mr-2">
              선택은
            </TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>과감</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_40}>하게</TextStore>
          </div>
        </div>

        <div className="mt-10">
          <BoxStore
            boxStyle={BoxStyle.BOX_SQUARE_NAVY}
            style="w-full h-auto rounded-3xl bg-gradient-to-b from-custom_userbg_start to-custom_userbg_end"
          >
            <div>
              <div className="p-8">
                <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                  어떻게 투자해야할지
                </TextStore>
                <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                  모른다면 verda에
                </TextStore>
                <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                  문의하세요
                </TextStore>
                <div className="flex">
                  <TextStore
                    textStyle={TextStyle.TEXT_R_16}
                    style="text-indigo-900 mr-1"
                  >
                    검증된 전문
                  </TextStore>
                  <TextStore
                    textStyle={TextStyle.TEXT_R_16}
                    style="text-white bg-indigo-700"
                  >
                    펀드매니저
                  </TextStore>
                  <TextStore
                    textStyle={TextStyle.TEXT_R_16}
                    style="text-indigo-900"
                  >
                    가 답해드립니다.
                  </TextStore>
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-5 w-full overflow-hidden">
              <div className="flex image-animation">
                <FundManagers
                  name="손투자"
                  location="서울"
                  investmentAmount="760만원"
                  solution="좋은 제안서 많습니다."
                  solution1="최선을 다하겠습니다."
                />
                <FundManagers
                  name="최투자"
                  location="서울"
                  investmentAmount="550만원"
                  solution="첨부해주신 자료를 보면 "
                  solution1="투자 가능성이 좋습니다."
                />
                <FundManagers
                  name="최부자"
                  location="부산"
                  investmentAmount="50만원"
                  solution="적은 투자금도 "
                  solution1="가능합니다."
                />
                <FundManagers
                  name="손투자1"
                  location="서울"
                  investmentAmount="760만원"
                  solution="좋은 제안서 많습니다."
                  solution1="최선을 다하겠습니다."
                />
                <FundManagers
                  name="최투자1"
                  location="서울"
                  investmentAmount="550만원"
                  solution="첨부해주신 자료를 보면 "
                  solution1="투자 가능성이 좋습니다."
                />
                <FundManagers
                  name="최부자1"
                  location="부산"
                  investmentAmount="50만원"
                  solution="적은 투자금도 "
                  solution1="가능합니다."
                />
              </div>
            </div>
          </BoxStore>
        </div>
      </div>
    </>
  );
}

export default Contents;
