import { postsReducer } from './store/posts/posts.reducer';

import { PostState } from './store/posts/posts.state';

export interface AppState {
  posts: PostState;
}

export const appReducer = {
  posts: postsReducer,
};
