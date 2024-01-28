interface SummarizedPost {
  postId: number;
  title: string;
  name: string;
}
interface Post {
  postId: number;
  title: string;
  content: string;
  createdAt: Date;
  name: string;
}
interface SummarizedChat {
  content: string;
  fmId: number;
  roomId: number;
  userId: number;
  postId: number;
  targetName: string;
}
