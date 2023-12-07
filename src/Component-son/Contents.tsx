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
                  name="손영석"
                  location="서울"
                  record="12%"
                  investmentAmount="760만원"
                  solution="좋은 제안서 많습니다. 글 한번 검토해보시고 연락주시면 최선을 다하겠습니다."
                />
                <FundManagers
                  name="석영손"
                  record="11.2%"
                  location="서울"
                  investmentAmount="550만원"
                  solution="첨부해주신 자료를 보면 제가 진행해왔던 사례들과 비슷한점들이 많습니다. 검토해보시고 알려주세요"
                />
                <FundManagers
                  name="최고점"
                  record="9.8%"
                  location="부산"
                  investmentAmount="50만원"
                  solution="적은 투자금도 크게 만들 수 있습니다. 가벼운 마음으로 시작해 보세요."
                />
                <FundManagers
                  name="재투자"
                  record="15%"
                  location="서울"
                  investmentAmount="760만원"
                  solution="투자에 대해 모르는것은 쉽게 이해할 수 있도록 설명해 드릴게요, 재밌게 시작해요세요."
                />
                <FundManagers
                  name="최미래"
                  record="12.5%"
                  location="서울"
                  investmentAmount="550만원"
                  solution="투자가 어렵다고만 느껴지시겠지만 전문가와 함께 진행하면 어렵지 않습니다. 쉽게 접근하세요"
                />
                <FundManagers
                  name="이기자"
                  record="8.8%"
                  location="부산"
                  investmentAmount="50만원"
                  solution="친구와 상담하듯이 도와드리겠습니다. 편안하게 문의하고 편안하게 투자하세요"
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
