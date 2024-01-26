import React from "react";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

function Reviews() {
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
            <TextStore textStyle={TextStyle.TEXT_R_32} style="mr-2">
              고객의 실제
            </TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_32} style="text-custom_navy">
              투자후기
            </TextStore>
          </div>
        </div>
        <div className="mt-2">
          <BoxStore
            boxStyle={BoxStyle.BOX_SQUARE_NAVY}
            style="w-full h-auto !bg-slate-200 !pl-0 !pr-0"
          >
            <div className="flex justify-around mt-5 w-full overflow-hidden">
              <div className="flex image-animation">
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-52 ml-5 mb-5 !bg-custom_orange"
                >
                  <div>
                    <div className="flex mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_16}
                        style="w-full !text-black"
                      >
                        " 돈을 예상보다 많이 벌어서 너무 너무 행복합니다. 아직
                        관심이 있다면 적극 추천합니다! "
                      </TextStore>
                    </div>

                    <div className="mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_11}
                        style="!text-black"
                      >
                        손영석 펀드매니저님 고객
                      </TextStore>
                    </div>
                  </div>
                </BoxStore>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-52 ml-5 mb-5 !bg-indigo-400"
                >
                  <div>
                    <div className="flex mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_16}
                        style="w-full !text-black"
                      >
                        " 매니저님의 좋은 코칭으로 큰 성과를 달성했어요.
                        만족합니다! "
                      </TextStore>
                    </div>

                    <div className="mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_11}
                        style="!text-black"
                      >
                        이기자 펀드매니저님 고객
                      </TextStore>
                    </div>
                  </div>
                </BoxStore>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-52 ml-5 mb-5 !bg-cyan-400"
                >
                  <div>
                    <div className="flex mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_16}
                        style="w-full !text-black"
                      >
                        " 투자가 무섭다면 VERDA로 시작 "
                      </TextStore>
                    </div>

                    <div className="mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_11}
                        style="!text-black"
                      >
                        손영석 펀드매니저님 고객
                      </TextStore>
                    </div>
                  </div>
                </BoxStore>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-52 ml-5 mb-5 !bg-custom_orange"
                >
                  <div>
                    <div className="flex mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_16}
                        style="w-full !text-black"
                      >
                        " 투자가 이렇게 쉬운 건지 몰랐네요. 강추 "
                      </TextStore>
                    </div>

                    <div className="mt-3">
                      <TextStore
                        textStyle={TextStyle.TEXT_R_11}
                        style="!text-black"
                      >
                        최미래 펀드매니저님 고객
                      </TextStore>
                    </div>
                  </div>
                </BoxStore>
              </div>
            </div>
          </BoxStore>
        </div>
      </div>
    </>
  );
}

export default Reviews;
