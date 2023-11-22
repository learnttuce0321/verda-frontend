"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxRectangeWhite({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-white w-[24.75rem] rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}