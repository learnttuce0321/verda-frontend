"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxCornerRegular({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-white w-[7.6rem] rounded-lg p-3 border border-black ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}