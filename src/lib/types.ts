export interface User {
  id: string;
  name: string;
  displayName: string;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: string;
  user: User;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: number;
  content: string;
  userId: string;
  user: User;
  postId: number;
  createdAt: string;
  updatedAt: string;
}
