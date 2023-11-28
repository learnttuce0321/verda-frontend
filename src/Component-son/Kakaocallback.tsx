import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function KakaoCallback() {
  const router = useSearchParams();
  const authorizationCode = router.get("code");
  console.log(authorizationCode);

  useEffect(() => {
    console.log("Authorization Code:", authorizationCode);
    if (authorizationCode) {
      sendCodeToBackend(authorizationCode);
      console.log("useEffect : ", authorizationCode);
    }
  }, [authorizationCode]);

  const sendCodeToBackend = async (code: string | null) => {
    try {
      if (code === null) {
        console.error("Authorization code is null");
        return;
      }

      try {
        const response = await fetch("https://verda.monster/api/auth/kakao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorizationCode: code }),
        });

        if (!response.ok) {
          throw new Error("Failed to request access token");
        }

        const data = await response.json();
        console.log("Data from backend:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <div>카카오톡 인가코드 받음</div>;
}

export default KakaoCallback;
