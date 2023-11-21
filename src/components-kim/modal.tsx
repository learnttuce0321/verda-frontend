import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();

  const loadMyPageHandler = () => {
    router.push("/fundmanager/mypage");
  };

  return (
    <div>
      <button>로그아웃</button>
      <button onClick={loadMyPageHandler}>마이페이지</button>
    </div>
  );
}
