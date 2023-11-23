import Link from "next/link";

function InfoLogin() {
  return (
    <>
      <div className="w-72 border-2 border-black rounded-2xl p-8 flex mt-20">
        <div>
          <p>펀드매니저 이신가요? </p>
          <p>verda에서 더 많은 고객을 만나보세요. </p>
        </div>
        <Link href="/loginManager">
          <button type="button" className="border-2 border-black rounded-2xl">
            펀드매니저
            <br />
            로그인/가입하기
          </button>
        </Link>
      </div>
      <div className="w-72 border-2 border-black rounded-2xl p-8 mt-10">
        <div>
          <p>지금 의뢰하고 다양한 투자전략을 제안 받으세요.</p>
        </div>
        <Link href="/loginUser">
          <button type="button" className="border-2 border-black rounded-2xl">
            펀드매니저
            <br />
            로그인/가입하기
          </button>
        </Link>
      </div>
    </>
  );
}
export default InfoLogin;
