import Link from "next/link";
import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import ButtonButton from "@/Components/Molecure/Button-son/ButtonButton";

function InfoLogin() {
  return (
    <>
      <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LIGHTBLUE} style="flex mt-10 ">
        <div className="flex ml-auto mr-auto items-center">
          <div className="flex flex-col">
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              style="w-full"
              children="펀드매니저 이신가요?"
            />
            <TextStore
              textStyle={TextStyle.TEXT_R_16}
              style="w-full"
              children="verda에서 더 많은 고객을 만나보세요."
            />
          </div>
          <Link href="/loginManager">
            <ButtonButton
              title="펀드매니저 "
              title1=" 로그인/가입하기"
              style="w-auto !bg-blue-50 text-center flex p-2 ml-5"
            />
          </Link>
        </div>
      </BoxStore>
      <BoxStore
        boxStyle={BoxStyle.BOX_RECTANGLE_NAVY}
        style="flex flex-col items-center mt-10"
      >
        <div>
          <TextStore
            textStyle={TextStyle.TEXT_R_16}
            style="text-white"
            children="지금 의뢰하고 다양한 투자전략을 제안 받으세요."
          />
        </div>
        <Link href="/loginUser">
          <ButtonButton
            title="로그인/가입하기"
            title1=""
            style="!bg-blue-300 w-auto p-2"
          />
        </Link>
      </BoxStore>
    </>
  );
}
export default InfoLogin;
