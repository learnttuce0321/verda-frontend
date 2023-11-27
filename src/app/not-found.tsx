import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404 EROOR</h1>
      <Image
        src="/verda_logo.png"
        width={250}
        height={177}
        alt="verda_logo" />
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>요청하신 페이지가 사라졌거나,</p>
      <p>잘못된 경로를 이용 하셨어요.</p>
      <Link href="/user">
        <button type="button">Home</button>
      </Link>
    </>
  );
}
