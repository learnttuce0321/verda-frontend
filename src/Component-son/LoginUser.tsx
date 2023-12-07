"use client";

import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { loginState } from "../utils/recoil/loginState";

function LoginUser() {
  const routerUser = useRouter();
  const router = useSearchParams();
  const pathName = usePathname();
  const authorizationCode = router.get("code");
  const [recoildata, setRecoildata] = useRecoilState(loginState);

  // 동일한 이메일의 회원정보 있는지 확인
  const checkEmailExistence = async (encodedEmail: string) => {
    console.log(encodedEmail);
    try {
      const response = await fetch(
        `https://verda.monster/api/members/user/exist/${encodedEmail}`,
      );
      const data = await response.json();
      if (data) {
        console.log("해당 이메일에 등록된 정보가 없음 회원가입 진행");
        routerUser.push("/signupUser");
      } else {
        console.log("등록된 정보 있음 유저페이지로 이동");
        routerUser.push("/user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendCodeToBackend = async (code: string | null) => {
    try {
      if (code === null) {
        console.error("Authorization code is null");
        return;
      }
      console.log("-----------2---------------", code);
      const response = await fetch(
        `${process.env.BASE_URL}/api/auth/kakaouser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorizationCode: code }),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to request access token");
      }
      const data = await response.json();
      // Recoil상태 업데이트
      const recoilData = {
        email: data.email,
        authToken: {
          accessToken: data.authToken.accessToken,
          refreshToken: data.authToken.refreshToken,
        },
        name: data.authToken.name,
      };
      localStorage.setItem("loginData", JSON.stringify(recoilData));
      setRecoildata(recoilData);
      console.log("userEmail from backend:", data);
      const encodedEmail = data.email;
      await checkEmailExistence(encodedEmail);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKakaoLogin = async () => {
    try {
      const API_KEY = "90085a0fa6f999d431f31e0de484536a";
      const REDIRECT_URI = `${window.location.origin}/loginUser`;
      // 카카오 로그인 요청을 위한 URL 생성
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

      // 클라이언트 측에서 카카오 로그인 페이지로 리다이렉트
      routerUser.push(kakaoAuthUrl);

      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        await sendCodeToBackend(code);
      }
    } catch (error) {
      console.error("카카오 로그인에 실패했습니다.", error);
    }
  };
  // ----------------------after redirect-------------

  useEffect(() => {
    if (authorizationCode) {
      sendCodeToBackend(authorizationCode);
    }
  }, [authorizationCode]);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center mt-20">
          <div>
            <TextStore
              textStyle={TextStyle.TEXT_R_40}
              style="flex flex-col mt-20"
            >
              회원가입하고 맞춤형
            </TextStore>
          </div>
          <div className="flex">
            <TextStore textStyle={TextStyle.TEXT_R_40_BLUE}>투자제안</TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_40} style="flex">
              을 받으세요
            </TextStore>
          </div>
          <Image
            src="/kakao_login_large_wide.png"
            className="w-10/12 mt-10"
            width={350}
            height={53}
            alt="kakao_login"
            onClick={handleKakaoLogin}
          />
          <div className="flex mt-10">
            <TextStore textStyle={TextStyle.TEXT_R_16}>
              혹시 펀드매니저 이신가요?
            </TextStore>
            <Link href="/loginManager">
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-custom_navy"
              >
                펀드매니저로 회원가입
              </TextStore>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
