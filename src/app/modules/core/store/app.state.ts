import { postsReducer } from './posts/reducer/posts.reducer';

import { PostState } from './posts/posts.state';

export interface AppState {
  posts: PostState;
}

export const appReducer = {
  posts: postsReducer,
};
