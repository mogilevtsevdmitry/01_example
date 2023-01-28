import { IPost } from './../post.interface';

export interface ISetNotBublished {
  setNotPublished(): void;
}

export const SET_NOT_PUBLISHED = async function (this: IPost) {
  this.isPublished = false;
};
