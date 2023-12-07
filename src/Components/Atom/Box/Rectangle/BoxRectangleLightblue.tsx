"use client";

interface Props {
  children: React.ReactNode;
  style?: string;
  clickHandler?: () => void;
};

export default function BoxRectangeLightblue({
  children,
  clickHandler,
  style,
}: Props) {
  return (
    <div
      className={`bg-custom_lightblue w-[24.75rem] rounded-2xl p-3 ${style}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
