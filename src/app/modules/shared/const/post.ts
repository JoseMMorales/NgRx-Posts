import { Post } from '../models/post.model';

export const emptyPost: Post = {
  title: '',
  body: '',
  id: 0,
  userId: 0,
  comments: [],
};

export const titleCreateForm: string = 'Create Post';
export const buttonTextCreateForm: string = 'Create';
export const titleEditForm: string = 'Edit Post';
export const buttonTextEditForm: string = 'Edit';
