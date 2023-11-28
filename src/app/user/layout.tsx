import UserNavigation from "@/Component-jsh/UserNavigation/UserNavigation";

export default function UserMainPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-b from-sky-500 to-blue-500 min-h-[100vh] ">
      <UserNavigation />
      <div className="px-5 pb-3">
        {children}
      </div>
    </main>
  )
}