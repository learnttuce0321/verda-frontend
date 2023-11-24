interface StyleProps {
  children: React.ReactNode;
  style?: string;
}

export default function Section({ children, style }: StyleProps) {
  return <section className={`my-3 ${style}`}>{children}</section>;
}
