"use client"

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxSquareMint({ children, clickHandler, style }: Props) {
  return (
    <div className={`bg-custom_mint h-48 rounded-3xl p-5 ${style}`} onClick={clickHandler}>
      {children}
    </div>
  )
}