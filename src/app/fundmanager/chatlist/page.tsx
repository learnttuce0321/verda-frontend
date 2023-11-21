import GoBackBtn from "@/components-kim/goback";

export default function ChatList() {
  return (
    <div>
      <GoBackBtn />
      <section className="border-4 border-indigo-500/100">
        <p>채팅목록</p>
        <button className="border-4 border-indigo-500/100">
          <p>user01</p>
          <p>최근 채팅 내용 보여주기 </p>
        </button>
        <br />
        <button className="border-4 border-indigo-500/100">
          <p>user02</p>
          <p>최근 채팅 내용 보여주기 </p>
        </button>
      </section>
    </div>
  );
}
