export default function Chat() {
  return (
    <div>
      <section>
        <p>채팅창</p>
        <button>뒤로</button>
        <p>유저이름</p>
        <div className="border-2 border-indigo-500/100 ">
          <div className="border-2 border-indigo-500/100 w-72 ">
            그건에 관해서는 3분기 미국 경제는 4.9% 가량 성장하는 모습으로,
            호조세 지속이 강한 모습을 보이고 있습니다. 따라서 Kodex
            미국배당프리미엄 액티브 ETF에 투자하는 방향이 어떠신지 제안드립니다.
          </div>
          <div className="border-2 border-indigo-500/100 w-72  ">
            <p>User01</p>
            <p>넹 감사합니다. </p>
          </div>
        </div>
        <input placeholder="메세지를 입력하세요" />
      </section>
    </div>
  );
}
