"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxRectangeSkygrey({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_skygrey w-[11rem] rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}