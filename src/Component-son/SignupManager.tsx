import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";
import InputForm from "@/Components/Molecure/Input-son/InputForm";

function SignupManager() {
  return (

    <>
      <div className="flex flex-col items-center mt-20">
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

          <form className="flex flex-col items-center mt-10">
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
                children="가입하기"
              ></TextStore>
            </BoxStore>
          </form>
        </div>
      </div>
    </>

  );
}
export default SignupManager;
