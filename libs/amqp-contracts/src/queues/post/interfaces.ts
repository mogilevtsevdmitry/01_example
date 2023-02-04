export interface CreatePostRequest {
  /** Заголовок поста */
  title: string;

  /** Сообщение поста */
  message: string;
}

export interface PostResponse {
  /** Идентификатор поста */
  id: string;

  /** Заголовок поста */
  title: string;

  /** Сообщение поста */
  message: string;

  /** Идентификатор автора поста */
  authorId: string;

  /** Дата создания */
  createdAt: string;

  /** Дата обновления */
  updatedAt: string;
}
