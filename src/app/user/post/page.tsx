"use client"

import Link from "next/link"
import { ChevronRight } from "react-bootstrap-icons"

const POST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: "주상후",
    title: "미국 주식 투자 문의"
  },
  {
    id: 2,
    fundManagerName: "손영석",
    title: "미국 펀드 투자 문의"
  },
]

export default function PostListPage() {
  return (
    <>
      <section>
        <h1>내 문의글</h1>
        {
          POST_DUMMYDATA.map(post => {
            return (
              <Link href={`/user/post/${post.id}`} key={post.id}>
                <div key={post.id} className="flex mx-10 my-5 bg-white p-3 rounded-lg justify-between">
                  <h3>{post.title}</h3>
                  <ChevronRight />
                </div>
              </Link>
            )
          })
        }
      </section>
    </>
  )
}