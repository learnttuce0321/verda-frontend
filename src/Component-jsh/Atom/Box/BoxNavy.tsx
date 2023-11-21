"use client"

interface Props {
  children: React.ReactNode,
  clickHandler?: () => void
};

export default function BoxNavy({ children, clickHandler }: Props) {
  return (
    <div className="bg-custom_navy h-48 rounded-lg p-3" onClick={clickHandler}>
      {children}
    </div>
  )
}