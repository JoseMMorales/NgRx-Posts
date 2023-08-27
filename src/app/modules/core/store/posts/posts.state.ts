import { Post } from '../../../shared/models/post.model';

export interface PostState {
  posts: Post[];
  isLoading: boolean;
}

export const initialState: PostState = {
  posts: [],
  isLoading: false,
};
