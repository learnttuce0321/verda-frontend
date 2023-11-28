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
      className={`bg-white h-28 rounded-lg p-3 ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
