"use client"

import { notFound } from "next/navigation"

interface Props {
  params: {
    roomId: string
  }
}

const CHATLIST_DUMMYDATA = [
  {
    id: 1,
    fundManagerName: '주상후',
    firstMessage: '안녕하세요. 저는 펀드매니저 주상후 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: '안녕하세요'
  },
  {
    id: 2,
    fundManagerName: '손영석',
    firstMessage: '안녕하세요. 저는 펀드매니저 손영석 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: '하'
  },
  {
    id: 3,
    fundManagerName: '김미리',
    firstMessage: '안녕하세요. 저는 펀드매니저 김미리 입니다. 이번건에 대허서 답장을 드리기 위해 연락을 드렸습니다.',
    secondMessage: 'ㅁ유햐'
  }
]

export default function ChatDetailPage({ params: { roomId } }: Props) {
  const data = CHATLIST_DUMMYDATA.find(chat => chat.id === parseInt(roomId))

  if (data === undefined) {
    notFound()
  }

  return (
    <>
      <section className="w-[100%]">
        <h1>{data?.fundManagerName}</h1>
        <div className="border-2 opacity-100 h-[1000px]">
          <div className="flex justify-start w-[100%]">
            <div className="
          bg-white
          relative 
          inline-block
          w-[250px]
          p-[10px]
          mt-[7px]
          ml-[15px]
          rounded-lg
          break-keep
          before:absolute
          before:block
          before:top-0
          before:left-[-12.5px]
          before:content-['◀']
          before:text-white
          before:border-0
          ">{data?.firstMessage}</div>

          </div>
          <div className="flex justify-end w-[100%]">
            <div className="
          bg-custom_orange
          relative
          inline-block
          w-[250px]
          p-[10px]
          mt-[7px]
          mr-[15px]
          rounded-lg
          break-keep
          before:absolute
          before:right-[-12.5px]
          before:block
          before:top-0
          before:content-['▶']
          before:text-custom_orange
          before:border-0">
              {data?.secondMessage}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}