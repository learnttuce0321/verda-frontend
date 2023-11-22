import UserNavigation from "@/Component-jsh/UserNavigation/UserNavigation";

export default function UserMainPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-gradient-to-b from-sky-500 to-blue-500 h-screen ">
        <UserNavigation />
        <div className="p-3">
          {children}
        </div>
      </main>
    </>
  )
}