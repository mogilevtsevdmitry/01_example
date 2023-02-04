export interface CreatePostRequest {
  /** Заголовок поста */
  title: string;

  /** Сообщение поста */
  message: string;

  authorId: string;
}

export interface PostResponse {
  title: string;
  message: string;
  authorId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
