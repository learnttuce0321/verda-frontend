"use client";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useEffect } from "react";

function Contents() {
  // const sliderRef = useRef(null);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickGoTo(0); // Go to the first slide on mount
  //     }
  //   }, 0);
  // }, []);

  return (
    <div>
      <div className="w-[24.75rem]">
        <TextStore textStyle={TextStyle.TEXT_R_40} style="flex mt-10">
          투자는<TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>신중</TextStore>
          하게
        </TextStore>
        <TextStore textStyle={TextStyle.TEXT_R_40} style="flex">
          선택은<TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>과감</TextStore>
          하게
        </TextStore>

        <div className="mt-10">
          <BoxStore
            boxStyle={BoxStyle.BOX_SQUARE_NAVY}
            style="w-full h-auto rounded-3xl bg-gradient-to-b from-cyan-500 to-blue-500 p-35"
          >
            <div>
              <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                어떻게 투자해야할지
              </TextStore>
              <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                모른다면 verda에
              </TextStore>
              <TextStore textStyle={TextStyle.TEXT_M_24} style="leading-10">
                문의하세요
              </TextStore>
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style="flex text-indigo-900 "
              >
                검증된 전문
                <TextStore
                  textStyle={TextStyle.TEXT_R_16}
                  style="text-white bg-indigo-700"
                >
                  펀드매니저
                </TextStore>
                가 답해드립니다.
              </TextStore>
            </div>
            <div className="flex justify-around mt-5 w-full">
              {/* <Slider ref={sliderRef} {...settings}> */}
              <div>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-28 h-28 ml-5"
                >
                  이미지1
                </BoxStore>
              </div>
              <div>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-28 h-28 ml-5"
                >
                  이미지2
                </BoxStore>
              </div>
              <div>
                <BoxStore
                  boxStyle={BoxStyle.BOX_SQUARE_WHITE}
                  style="w-28 h-28 ml-5"
                >
                  이미지3
                </BoxStore>
              </div>
              {/* </Slider> */}
            </div>
          </BoxStore>
        </div>
      </div>
    </div>
  );
}
export default Contents;
