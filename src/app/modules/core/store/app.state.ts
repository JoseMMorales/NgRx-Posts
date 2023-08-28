import { postsReducer } from './posts/posts.reducer';

import { PostState } from './posts/posts.state';

export interface AppState {
  posts: PostState;
}

export const appReducer = {
  posts: postsReducer,
};
