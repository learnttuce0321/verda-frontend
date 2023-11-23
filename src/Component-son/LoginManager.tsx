import Link from "next/link";

function LoginManager() {
  return (
    <div className="mt-10">
      <p>고객문의를 확인하고</p>
      <p>투자수수료를 받으세요</p>
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
        혹시 투자자 이신가요?
        <Link href="/LoginUser">
          <p>로그인</p>
        </Link>
      </p>
    </div>
  );
}
export default LoginManager;
