"use client";

import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputForm from "@/Components/Molecure/Input-son/InputForm";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "@/utils/recoil/loginState";
interface UserData {
  name: string;
  investmentPropensity: string;
}

function InvestmentTypeUpdate() {
  const recoildata = useRecoilValue(loginState);
  const email = recoildata.email;
  const [userdata, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (userdata) {
      setInvestmentType(userdata.investmentPropensity || "");
    }
  }, [userdata]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.BASE_URL}/api/members/user/${email}`,
          {
            method: "GET",
          },
        );
        const userData = await res.json();
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [email]);

  const routerUser = useRouter();
  const [investmentType, setInvestmentType] = useState(
    `${userdata?.investmentPropensity}`,
  );
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
            email: "sonys95@naver.com",
            number: "testsets",
            investmentPropensity: data.investmentPropensity,
          }),
        },
      );
      routerUser.refresh();
      if (!response.ok) {
        throw new Error("Failed to send data to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_WHITE}>
        <form className="flex flex-col items-center" onSubmit={registerHandle}>
          <div className="flex flex-col mb-10 self-start">
            <TextStore textStyle={TextStyle.TEXT_R_30}>
              나의 투자 성향
            </TextStore>
            <TextStore textStyle={TextStyle.TEXT_R_30} style="text-custom_navy">
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
            value={
              investmentType === "관심없음"
                ? 0
                : investmentType === "겁쟁이형"
                  ? 1
                  : investmentType === "몸사리는형"
                    ? 2
                    : investmentType === "안정추구형"
                      ? 3
                      : investmentType === "살짝 공격형"
                        ? 4
                        : investmentType === "투자광"
                          ? 5
                          : 3
            }
            onChange={handleRangeChange}
          />
          <BoxStore
            boxStyle={BoxStyle.BOX_RECTANGLE_NAVY}
            style="rounded-3xl mt-10 w-1/5 self-end"
          >
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              style=" text-white text-center"
            >
              <button type="submit">저장</button>
            </TextStore>
          </BoxStore>
        </form>
      </BoxStore>
    </div>
  );
}

export default InvestmentTypeUpdate;
