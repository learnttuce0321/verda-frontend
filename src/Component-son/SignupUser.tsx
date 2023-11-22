function SignupUser() {
  return (
    <>
      <div className="mt-10">
        <p>펀드매니저</p>
        <p>회원가입하기</p>
        <form className="flex flex-col items-center">
          <input
            className="w-72 border-2 border-black rounded-2xl"
            placeholder="이메일"
          ></input>
          <input
            className="w-72 border-2 border-black rounded-2xl"
            placeholder="이름"
          ></input>
          <input
            className="w-72 border-2 border-black rounded-2xl"
            placeholder="성별"
          ></input>
          <input
            className="w-72 border-2 border-black rounded-2xl"
            placeholder="생년월일"
          ></input>
          <input
            className="w-72 border-2 border-black rounded-2xl"
            placeholder="번호"
          ></input>
          <p>펀드매니저임을 입증하는 파일을 업로드해주세요.</p>
          <p>첨부자료가 없으면 회원가입이 불가능합니다.</p>
          <input placeholder="파일"></input>
          <button>가입하기</button>
        </form>
      </div>
    </>
  );
}
export default SignupUser;
