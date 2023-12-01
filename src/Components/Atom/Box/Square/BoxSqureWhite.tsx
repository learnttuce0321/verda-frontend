"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}

export default function BoxSquareWhite({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-white h-48 rounded-3xl p-5 ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
