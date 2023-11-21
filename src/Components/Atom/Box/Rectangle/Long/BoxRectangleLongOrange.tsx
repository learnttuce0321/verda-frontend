"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxRectangeLongOrange({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_orange w-[24.75rem] rounded-3xl p-1 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}