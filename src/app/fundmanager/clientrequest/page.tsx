import ClientRequest from "@/Components/Organism/Client-request/ClientRequest";

const size = 20;
const lastPostId = 10000;
const getData = async (): Promise<any> => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/board?lastPostId=${lastPostId}&size=${size}`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    return <>Loading...</>;
  }

  return res.json();
};

export default async function ClientRequestData() {
  return <ClientRequest />;
}
