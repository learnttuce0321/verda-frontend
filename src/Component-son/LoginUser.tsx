import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonButton from "@/Components/Molecure/Button-son/ButtonButton";
import Link from "next/link";
import React from "react";

function LoginUser() {
  const handleKakaoLogin = async () => {
    try {
      const API_KEY = "90085a0fa6f999d431f31e0de484536a";
      const REDIRECT_URI = "http://localhost:3000/kakao/user";

      // 카카오 로그인 요청을 위한 URL 생성
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

      // 클라이언트 측에서 카카오 로그인 페이지로 리다이렉트
      window.location.href = kakaoAuthUrl;

      const code = new URL(window.location.href).searchParams.get("code");
      console.log(code);
    } catch (error) {
      console.error("카카오 로그인에 실패했습니다.", error);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center mt-20">
          <TextStore
            textStyle={TextStyle.TEXT_R_40}
            style="flex flex-col mt-10 mb-20"
          >
            회원가입하고 맞춤형
            <TextStore textStyle={TextStyle.TEXT_R_40} style="flex">
              <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>
                투자제안
              </TextStore>
              을 받으세요
            </TextStore>
          </TextStore>

          {/* --------------------카카오 로그인------------------------- */}

          <BoxStore
            boxStyle={BoxStyle.BOX_RECTANGLE_LIGHTBLUE}
            style="flex bg-yellow-300 "
            clickHandler={handleKakaoLogin}
          >
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              style="w-full"
              children="카카오톡으로 로그인하기"
            ></TextStore>
          </BoxStore>

          {/* --------------------------------------------- */}
          <div className="flex mt-10">
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              children="혹시 펀드매니저 이신가요?"
            ></TextStore>
            <Link href={"/loginManager"}>
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-custom_navy"
                children="펀드매니저로 회원가입"
              ></TextStore>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginUser;
