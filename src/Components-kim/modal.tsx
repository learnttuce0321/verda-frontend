"use client";

import Link from "next/link";

const fmId: number = 1;

export default function Modal() {
  return (
    <div className="absolute">
      <button type="button">로그아웃</button>
      <Link href={`/fundmanager/mypage/${fmId}`}>
        <button type="button">마이페이지</button>
      </Link>
    </div>
  );
}
