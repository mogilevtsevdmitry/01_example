import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  message: string;

  @Column({ name: 'author_id' })
  authorId: string;

  @Column({ name: 'is_published' })
  isPublished: boolean;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
