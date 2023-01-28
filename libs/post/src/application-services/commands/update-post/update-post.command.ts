import { UpdatePostDto } from '../dto';

export class UpdatePostCommand {
  constructor(public readonly post: UpdatePostDto) {}
}
