"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}

export default function BoxSquareNavy({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-custom_navy h-48 rounded-3xl p-3 w-[24.75rem] ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
