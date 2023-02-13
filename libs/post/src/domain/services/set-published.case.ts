import { IPost } from '../post.interface';

export interface ISetBublished {
  setPublished(): void;
}

export const SET_PUBLISHED = async function (this: IPost) {
  this.published = true;
};
