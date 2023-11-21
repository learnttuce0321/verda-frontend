"use client";
import { useRouter } from "next/navigation";
import GoBackBtn from "@/components-kim/goback";

export default function MyPage() {
  return (
    <div>
      <nav>네비바</nav>
      <section className="border-solid border-2 border-indigo-600">
        <GoBackBtn />
        <p>내 정보</p>
        <p>프로필사진</p>
        <p>Fundmanager01@gmail.com</p>
        <p>한투자</p>
        <p>99세</p>
        <p>010-1234-5678</p>
        <button>저장하기</button>
      </section>
    </div>
  );
}
