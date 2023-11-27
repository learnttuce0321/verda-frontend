import { useSearchParams } from "next/navigation";

function KakaoCallback() {
  const router = useSearchParams();
  console.log("카카오톡 authorizationCode :", router);

  // async function sendCodeForAccessToken(code) {
  //   const response = await fetch("/api/auth/kakao", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ code }),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to request access token");
  //   }

  //   const data = await response.json();
  //   return data;
  // }
  // const authorizationCode = router.code; // 인가코드 추출

  // if (authorizationCode) {
  //   sendCodeForAccessToken(authorizationCode)
  //     .then(data => {
  //       // 여기서 받은 데이터를 처리합니다.
  //       console.log("access token data:", data);
  //     })
  //     .catch(error => {
  //       console.error("Error :", error);
  //     });
  // }

  return <div>카카오톡 인가코드 받음</div>;
}

export default KakaoCallback;
