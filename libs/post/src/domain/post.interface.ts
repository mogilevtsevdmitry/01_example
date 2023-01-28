export interface IPost {
  /** Идентификатор поста */
  id: string;

  /** Заголовок поста */
  title: string;

  /** Сообщение поста */
  message: string;

  /** Идентификатор автора поста */
  authorId: string;

  /** Опубликован пост или нет */
  isPublished: boolean;

  /** Дата создания */
  createdAt: string;

  /** Дата обновления */
  updatedAt: string;
}
