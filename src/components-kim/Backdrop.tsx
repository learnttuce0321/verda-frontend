type BackDropType = {
  children: React.ReactNode;
  loginModalHandler: () => void;
};

export default function Backdrop({
  children,
  loginModalHandler,
}: BackDropType) {
  return (
    <div className="" onClick={loginModalHandler}>
      {children}
    </div>
  );
}
