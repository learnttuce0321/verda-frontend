import MyPage from "@/organisms/fundmanager-kim/Mypage/mypage";

const token = null;
const getUserData = async (): Promise<any> => {
  const res = await fetch(`${process.env.BASE_URL}/api/members/${token}`, {
    method: "GET",
  });

  if (!res.ok) {
    return <p>Loading...</p>;
  }

  return res.json();
};

export default function MypageInfo() {
  return <MyPage />;
}
