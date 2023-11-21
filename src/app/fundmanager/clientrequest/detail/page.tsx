"use client";
import { useRouter } from "next/navigation";

export default function RequestDetail() {
  const router = useRouter();
  const GotoBack = () => {
    router.back();
  };

  const loadChat = () => {
    router.push("/fundmanager/chat");
  };
  return (
    <div>
      <nav>네비바</nav>
      <section>
        <button onClick={GotoBack}>뒤로</button>
        <div className="border-solid border-2 border-indigo-600">
          <p>use01</p>
          <p>제목 : 미국 주식투자 문의</p>
          <p>
            내용 : 추가 상승여부로 말이 많았던 기준금리가 2회 연속 동결되며,
            금리 인상 종료 기대감이 커지고 있습니다. 금리 관련 강경한 태도는
            다소 누그러졌으나, 여전히 역대 최고 수준의 고금리 상황이 지속되고
            있는데요. 이런 상황에서 어떻게 투자하면 좋을까요?
          </p>
        </div>
        <button
          onClick={loadChat}
          className="border-solid border-2 border-indigo-600"
        >
          제안서 작성하기
        </button>
      </section>
    </div>
  );
}
