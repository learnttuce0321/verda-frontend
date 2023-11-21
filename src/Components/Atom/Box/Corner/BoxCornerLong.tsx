"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxCornerLong({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-white w-[24.75rem] rounded-lg p-2 border border-lightblue ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}