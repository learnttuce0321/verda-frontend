"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxSquareOrange({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-custom_orange h-48 rounded-3xl p-5 w-full ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
