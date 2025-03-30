
export interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  username: string;
  likes: number;
  loops: number;
  description?: string;
  userAvatar?: string;
  createdAt: string;
}
