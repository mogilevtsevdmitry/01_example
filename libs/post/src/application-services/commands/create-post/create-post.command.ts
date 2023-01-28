import { CreatePostDto } from '../dto';

export class CreatePostCommand {
  constructor(public readonly post: CreatePostDto) {}
}
