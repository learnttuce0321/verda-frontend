import ClientRequestDetail from "@/Components/Organism/Client-request/ClientRequestDetail";

interface Props {
  params: {
    postid: string;
  };
};

export default async function RequestDetailPage({ params: { postid } }: Props) {
  return <ClientRequestDetail postid={postid} />;
};
