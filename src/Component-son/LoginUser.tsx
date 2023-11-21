import Link from "next/link";

function LoginUser() {
  return (
    <>
      <div className="mt-10">
        <p>회원가입하고 맞춤형</p>
        <p>투자제안을 받으세요</p>
        <div className="w-72 border-2 border-black rounded-2xl p-8 flex mt-5">
          <div>
            <p>카카오로 로그인하기</p>
          </div>
        </div>
        <div className="w-72 border-2 border-black rounded-2xl p-8 flex mt-5">
          <div>
            <p>구글로 로그인하기</p>
          </div>
        </div>
        <p>
          혹시 펀드매니저 이신가요?
          <Link href={"/LoginManager"}>
            <p>펀드매니저로 회원가입</p>
          </Link>
        </p>
      </div>
    </>
  );
}
export default LoginUser;
