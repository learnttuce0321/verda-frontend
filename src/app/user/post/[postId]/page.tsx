"use client"

import { notFound } from "next/navigation"

interface Props {
  params: {
    postId: string
  }
}

const POST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: "주상후",
    title: "미국 주식 투자 문의",
    content: "ㅁㄴㄻㄴㄻㄴㅇㄻㄴㄹㅇㅁㄴㄹㅇㄴㅁㄻㄴㄻㄴㄹㄴㅁㄻㄴㄹㅇㄴㅁㄻㄴㄻㄴㅇㄻㄴㄹㄴㅁㄻㄴㅇㄻㄴㄹ"
  },
  {
    id: 2,
    fundManagerName: "손영석",
    title: "미국 펀드 투자 문의",
    content: "ㅔㅕㅑㅐㅕㅐㅕㅐㅔㅕㅐㅔㅕㅔㅐㅕㅐㅕㅐㅕㅔㅐㅑㅕㅐㅔㅑㅕㅔㅐㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅑㅕㅔㅐㅕ"
  },
]

export default function PostDetailPage({ params: { postId } }: Props) {
  const data = POST_DUMMYDATA.find(post => post.id === parseInt(postId))

  if (data === undefined) {
    notFound()
  }
  return (
    <>
      <section>
        <h1 className="bg-white mb-4">{data?.title}</h1>
        <p className="bg-white mb-4 h-1/2">{data?.content}</p>
      </section>
    </>
  )
}