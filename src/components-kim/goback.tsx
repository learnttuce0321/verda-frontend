"use client";
import { useRouter } from "next/navigation";

export default function GoBackBtn() {
  const router = useRouter();
  const GotoBack = () => {
    router.back();
  };

  return <button onClick={GotoBack}>뒤로</button>;
}
