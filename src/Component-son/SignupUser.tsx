import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputForm from "@/Components/Molecure/Input-son/InputForm";
import { useState } from "react";

function SignupUser() {
  const [investmentType, setInvestmentType] = useState("중간");

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeValue = parseInt(event.target.value);
    let type = "";
    switch (typeValue) {
      case 0:
        type = "관심없음";
        break;
      case 1:
        type = "돈잃기 절대 절대 싫음";
        break;
      case 2:
        type = "돈잏는거 무서움";
        break;
      case 3:
        type = "소심함";
        break;
      case 4:
        type = "무섭";
        break;
      case 5:
        type = "이도저도아님";
        break;
      case 6:
        type = "살짝 돈벌고 싶음";
        break;
      case 7:
        type = "욕심있음";
        break;
      case 8:
        type = "투자해볼까/";
        break;
      case 9:
        type = "돈잃어도 투가 ㄱ";
        break;
      case 10:
        type = "돈잃더라고 투자 ㄱ";
        break;
      default:
        break;
    }
    setInvestmentType(type);
  };

  const registerHandle = async (event: any) => {
    event.preventDefault();
    const typeValue = parseInt(event.target.type.value);
    let type = "";

    const data = {
      email: event.target.email.value,
      name: event.target.name.value,
      gender: event.target.gender.value,
      birth: event.target.birth.value,
      number: event.target.phone.value,
      investment_propensity: investmentType,
    };
    console.log(data);
    const sendCodeToBackend = async (code: string | null) => {
      try {
        if (code === null) {
          console.error("data is null");
          return;
        }

        try {
          const response = await fetch(
            "https://verda.monster/api/members/user/{email}/addinfo",
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
          console.log("Data from backend:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  };
  return (
    <div>
      <div className="flex flex-col items-center mt-20">
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
              placeholder="이메일"
              id="email"
              name="email"
            />
            <InputForm
              style="mt-3"
              type=""
              placeholder="이름"
              id="name"
              name="name"
            />
            <InputForm
              style="mt-3"
              type=""
              placeholder="성별"
              id="gender"
              name="gender"
            />
            <InputForm
              style="mt-3"
              type=""
              placeholder="생년월일"
              id="birth"
              name="birth"
            />
            <InputForm
              style="mt-3"
              type=""
              placeholder="번호"
              id="phone"
              name="phone"
            />
            <div className="flex flex-col mt-10 self-start">
              <TextStore
                textStyle={TextStyle.TEXT_R_30}
                children="나의 투자 성향"
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
              max="10"
              id="type"
              name="type"
              onChange={handleRangeChange}
            ></input>

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
