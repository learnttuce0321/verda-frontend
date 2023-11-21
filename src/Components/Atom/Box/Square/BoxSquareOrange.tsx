"use client"

interface Props {
  children: React.ReactNode,
  style?: string,
  clickHandler?: () => void
};

export default function BoxSquareOrange({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_orange h-48 rounded-lg p-3 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}