"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
}

export default function BoxCornerLarge({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-white w-[24.75rem] rounded-lg p-3 border border-black w-full ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
