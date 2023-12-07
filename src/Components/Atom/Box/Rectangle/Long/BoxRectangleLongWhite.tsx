"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxRectangleLongWhite({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-white w-[24.75rem] rounded-3xl p-1 ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
