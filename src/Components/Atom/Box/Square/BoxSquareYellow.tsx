"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxSquareYellow({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_yellow h-48 rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}