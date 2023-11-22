"use client";
import { useRouter } from "next/navigation";

export default function ClientReqeust() {
  const router = useRouter();
  const GotoBack = () => {
    router.back();
  };

  const loadPost = () => {
    router.push("/fundmanager/clientrequest/detail");
  };

  return (
    <section>
      <nav>네비바</nav>
      <button onClick={GotoBack}>뒤로</button>
      <p className="text-2xl font-semibold">투자문의</p>
      <button
        onClick={loadPost}
        className="border-solid border-2 border-indigo-600"
      >
        <p className="font-semibold">user01</p>
        <p>미국 주식투자 문의</p>
      </button>

      <button
        onClick={loadPost}
        className="border-solid border-2 border-indigo-600"
      >
        <p className="font-semibold">user02</p>
        <p>국내 주식투자 문의</p>
      </button>
    </section>
  );
}
