"use client";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputForm from "@/Components/Molecure/Input-son/InputForm";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "../utils/recoil/loginState";

function SignupManager() {
  const router = useSearchParams();
  const authorizationCode = router.get("code");
  console.log(authorizationCode);
  const routerUser = useRouter();
  const recoildata = useRecoilValue(loginState);
  console.log("recoil에서 가져온 data 값: ", recoildata);
  const [investmentType, setInvestmentType] = useState("50%");

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeValue = parseInt(event.target.value);
    setInvestmentType(typeValue.toString() + "%");
  };
  const registerHandle = async (event: any) => {
    event.preventDefault();
    const data = {
      number: event.target.phone.value,
      file: "testtest",
      record: investmentType,
      location: event.target.location.value,
    };
    console.log(data);
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/members/fund/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: recoildata.email,
            number: data.number,
            record: data.record,
            location: data.location,
            file: "testtest",
          }),
        },
      );
      routerUser.push("/fundmanager");

      if (!response.ok) {
        throw new Error("Failed to send data to the backend");
      }
      const responseData = await response.json();
      console.log("Data from backend:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <div>
          <TextStore
            textStyle={TextStyle.TEXT_R_40_BLUE}
            style="flex flex-col mt-10 "
          >
            펀드매니저,
          </TextStore>
          <TextStore textStyle={TextStyle.TEXT_R_40} style="flex">
            회원가입하기
          </TextStore>
          <form
            className="flex flex-col items-center "
            onSubmit={registerHandle}
          >
            <div className="flex flex-col mt-10 self-start">
              <TextStore
                textStyle={TextStyle.TEXT_R_30}
                children="투자 수익률"
              ></TextStore>
              <TextStore
                textStyle={TextStyle.TEXT_R_30}
                style="text-custom_navy"
              >
                {investmentType}
              </TextStore>
            </div>
            <input
              type="range"
              className="accent-sky-300 w-full"
              min="0"
              max="100"
              id="record"
              name="record"
              onChange={handleRangeChange}
            ></input>
            <InputForm
              style="mt-3"
              type=""
              placeholder="주소"
              id="location"
              name="location"
            />
            <InputForm
              style="mt-3"
              type=""
              placeholder="번호"
              id="phone"
              name="phone"
            />
            <div className="flex flex-col mt-10">
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                children="펀드매니저임을 입증하는 파일을 업로드해주세요."
              ></TextStore>
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                children="첨부자료가 없으면 회원가입이 불가능합니다."
              ></TextStore>
            </div>
            <label htmlFor="file">
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-custom_navy"
                children="서류 첨부하기"
              ></TextStore>
            </label>
            <InputForm
              style="hidden"
              type="file"
              placeholder="파일"
              id="file"
              name="file"
            />
            <BoxStore
              boxStyle={BoxStyle.BOX_RECTANGLE_NAVY}
              style="rounded-3xl mt-10"
            >
              <TextStore
                textStyle={TextStyle.TEXT_R_16}
                style=" text-white text-center"
              >
                <button type="submit" className="w-full h-full">
                  가입하기
                </button>
              </TextStore>
            </BoxStore>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupManager;
