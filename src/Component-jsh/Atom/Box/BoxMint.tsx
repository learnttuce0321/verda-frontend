"use client"

interface Props {
  children: React.ReactNode,
  clickHandler?: () => void
};

export default function BoxMint({ children, clickHandler }: Props) {
  return (
    <div className="bg-custom_mint h-48 rounded-lg p-3" onClick={clickHandler}>
      {children}
    </div>
  )
}