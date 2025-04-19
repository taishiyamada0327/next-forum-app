export interface User {
  id: number;
  name: string;
  profileImage: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  iconName: string;
  iconColor: string;
  topicsCount: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  category: {
    id: number;
    name: string;
  };
  commentsCount: number;
  viewsCount: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: User;
  likes: number;
}
