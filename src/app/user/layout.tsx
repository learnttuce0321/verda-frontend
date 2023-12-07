export default function UserMainPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-b from-custom_userbg_start to-custom_userbg_end min-h-screen ">
      <div className="px-5 pb-3 pt-[100px]">
        {children}
      </div>
    </main>
  )
}