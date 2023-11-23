"use client";
import Link from "next/link";

interface props {
  link: string;
}

export default function GoBackBtn({ link }: props) {
  return <Link href={link}>뒤로</Link>;
}
