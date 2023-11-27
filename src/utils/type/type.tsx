interface SummarizedPost {
  postId: number;
  title: string;
  name: string;
};
interface Post {
  postId: number;
  title: string;
  content: string;
  createdAt: Date;
  name: string;
};
interface SummarizedChat {
  content: string;
  fm_id: number;
  room_id: number;
  user_id: number;
  post_id: number;
  target_Name: string;
}
