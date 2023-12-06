"use client";

import { List, X } from "react-bootstrap-icons";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { loginState } from "@/utils/recoil/loginState";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [toggle, setToggle] = useState<boolean>(false)
  const [loginToken, setLoginToken] = useRecoilState(loginState)
  const url = usePathname()

  const setRedirectURL = (): string => {
    switch (url.split('/')[1]) {
      case "user":
        return "/user";
      case "fundmanager":
        return "/fundmanager"
      default:
        return "/";
    }
  }

  useEffect(() => {
    const loginData = localStorage.getItem("loginData") as string
    if (loginData) {
      setLoginToken(JSON.parse(loginData))
    }
  }, [])

  return (
    <div className="flex justify-center mt-10 lg:pr-3 px-2 bg-transparent absolute z-10 w-[432px] overflow-hidden">

      <div className="flex justify-between px-4 w-full bg-transparent">
        <Link href={{ pathname: setRedirectURL() }}>
          <TextStore textStyle={TextStyle.TEXT_R_32} style="leading-[61px]">
            VERDA
          </TextStore>
        </Link>

        <div>
          <div className="flex">
            {/* todos : 위치 조정 및 링크 설정 */}
            {
              toggle && (
                !loginToken.email.length ? (
                  <div className="w-[118px] h-[155px] relative z-50 p-3 border-[1px] bg-white">
                    <div className="mb-3">
                      <Link href="/loginUser" onClick={() => { setToggle(false) }}>
                        <TextStore textStyle={TextStyle.TEXT_R_20} style="mb-2">로그인</TextStore>
                      </Link>
                      <Link href="/loginUser" onClick={() => { setToggle(false) }}>
                        <TextStore textStyle={TextStyle.TEXT_R_20} >회원가입</TextStore>
                      </Link>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center h-[80px]">
                      <Link href="/loginManager" className="bg-custom_lightblue w-full text-center " onClick={() => { setToggle(false) }}>
                        <TextStore textStyle={TextStyle.TEXT_R_15}>펀드매니저</TextStore>
                        <TextStore textStyle={TextStyle.TEXT_R_15}>가입/로그인</TextStore>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="w-[118px] h-[155px] relative z-50 p-3 border-[1px] bg-white">
                    <div className="mb-3">
                      <Link href="/" onClick={() => {
                        setToggle(false);
                        setLoginToken({ email: "", authToken: {}, name: "" });
                        localStorage.removeItem("loginData")
                      }}>
                        <TextStore textStyle={TextStyle.TEXT_R_20} style="mb-2">로그아웃</TextStore>
                      </Link>
                      <Link href="/" onClick={() => { setToggle(false) }}>
                        <TextStore textStyle={TextStyle.TEXT_R_20}>마이페이지</TextStore>
                      </Link>
                    </div>
                  </div>
                )
              )
            }
            {
              !toggle ? (
                <button type="button" className="flex items-center h-[61px] relative" onClick={() => { setToggle(true) }}>
                  <List width="2em" height="2em" />
                </button>
              ) : (
                <button type="button" className="flex items-center h-[61px] relative" onClick={() => { setToggle(false) }}>
                  <X width="2em" height="2em" />
                </button>
              )
            }
          </div>

          <div className="hidden">
            <div className="flex">
              <Link href="/loginUser" onClick={() => { setToggle(false) }}>
                <TextStore textStyle={TextStyle.TEXT_R_20} style="w-[70px] leading-[61px]">로그인</TextStore>
              </Link>
              <Link href="/loginUser" onClick={() => { setToggle(false) }}>
                <TextStore textStyle={TextStyle.TEXT_R_20} style="w-[90px] leading-[61px]">회원가입</TextStore>
              </Link>
              <Link href="/loginManager" className="bg-custom_lightblue w-full p-1 flex flex-col justify-center items-center" onClick={() => { setToggle(false) }}>
                <TextStore textStyle={TextStyle.TEXT_R_15}>펀드매니저</TextStore>
                <TextStore textStyle={TextStyle.TEXT_R_15}>가입/로그인</TextStore>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
