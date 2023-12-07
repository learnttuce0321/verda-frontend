"use client";

import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputForm from "@/Components/Molecure/Input-son/InputForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "../utils/recoil/loginState";

function SignupUser() {
  const routerUser = useRouter();
  const recoildata = useRecoilValue(loginState);

  const [investmentType, setInvestmentType] = useState("안정추구형");
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeValue = parseInt(event.target.value, 6);
    let type = "";
    switch (typeValue) {
      case 0:
        type = "관심없음";
        break;
      case 1:
        type = "겁쟁이형";
        break;
      case 2:
        type = "몸사리는형";
        break;
      case 3:
        type = "안정추구형";
        break;
      case 4:
        type = "살짝 공격형";
        break;
      case 5:
        type = "투자광";
        break;

      default:
        break;
    }
    setInvestmentType(type);
  };

  const registerHandle = async (event: any) => {
    event.preventDefault();

    const data = {
      number: event.target.phone.value,
      investmentPropensity: investmentType,
    };
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/members/user/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: recoildata.email,
            number: data.number,
            investmentPropensity: data.investmentPropensity,
          }),
        },
      );
      routerUser.push("/user");

      if (!response.ok) {
        throw new Error("Failed to send data to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <div>
          <TextStore
            textStyle={TextStyle.TEXT_R_40}
            style="flex flex-col mt-10 "
          >
            회원가입하기
          </TextStore>
          <form
            className="flex flex-col items-center"
            onSubmit={registerHandle}
          >
            <InputForm
              style="mt-3"
              type=""
              placeholder="번호"
              id="phone"
              name="phone"
            />
            <div className="flex flex-col mt-10 self-start">
              <TextStore textStyle={TextStyle.TEXT_R_30}>
                나의 투자 성향
              </TextStore>
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
              max="5"
              id="type"
              name="type"
              onChange={handleRangeChange}
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

export default SignupUser;
