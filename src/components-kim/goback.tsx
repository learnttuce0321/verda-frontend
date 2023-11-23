"use client";

import Link from "next/link";

interface Props {
  link: string;
}

export default function GoBackBtn({ link }: Props) {
  return <Link href={link}>뒤로</Link>;
}
