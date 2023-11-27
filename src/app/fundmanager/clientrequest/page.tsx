import ClientRequest from "@/Components/Organism/Client-request/ClientRequest";

export interface PageProps {
  pageNum: number;
}

const getData = async ({ pageNum }: PageProps): Promise<any> => {
  const size = 20;
  const lastPostId = 10000;
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

export default async function ClientRequestData({ pageNum }: PageProps) {
  // const data = await getData({ pageNum });

  // return <ClientRequest posts={data} getData={getData} />;
  return <ClientRequest getData={getData} />;
}
