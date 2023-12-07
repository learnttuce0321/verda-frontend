"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxCornerLong({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-white min-w-[24rem] rounded-lg p-2 border border-lightblue w-full ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
