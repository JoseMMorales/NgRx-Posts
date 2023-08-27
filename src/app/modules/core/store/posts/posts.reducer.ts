import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { PostState, initialState } from './posts.state';
import {
  createPosts,
  createPostsFailed,
  createPostsSuccess,
  deletePosts,
  deletePostsFailed,
  deletePostsSuccess,
  loadComments,
  loadCommentsFailed,
  loadCommentsSuccess,
  loadPosts,
  loadPostsFailed,
  loadPostsSuccess,
  updatePosts,
  updatePostsFailed,
  updatePostsSuccess,
} from './posts.actions';

const _postsReducer: ActionReducer<PostState, Action> = createReducer(
  initialState,
  on(loadPosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(loadPostsSuccess, (state, action) => {
    return { ...state, posts: action.posts, isLoading: false };
  }),
  on(loadPostsFailed, (state) => {
    return { ...state, isLoading: false };
  }),
  on(createPosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(createPostsSuccess, (state, action) => {
    return { ...state, posts: action.posts, isLoading: false };
  }),
  on(createPostsFailed, (state) => {
    return { ...state, isLoading: false };
  }),

  on(updatePosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(updatePostsSuccess, (state, action) => {
    return { ...state, posts: action.posts, isLoading: false };
  }),
  on(updatePostsFailed, (state) => {
    return { ...state, isLoading: false };
  }),

  on(deletePosts, (state, action) => {
    return { ...state, isLoading: true, id: action.id };
  }),
  on(deletePostsSuccess, (state, action) => {
    return { ...state, posts: action.posts, isLoading: false };
  }),
  on(deletePostsFailed, (state) => {
    return { ...state, isLoading: false };
  }),
  on(loadComments, (state) => {
    return { ...state, isLoading: true };
  }),
  on(loadCommentsSuccess, (state, action) => {
    const postsInStore = state.posts;

    const postsArrayUpdated = postsInStore.map((postInStore) => {
      return {
        ...postInStore,
        comments: action.comments.filter((comment: any) => {
          return comment.postId === postInStore.id;
        }),
      };
    });

    return { ...state, posts: [...postsArrayUpdated], isLoading: false };
  }),
  on(loadCommentsFailed, (state) => {
    return { ...state, isLoading: false };
  })
);

export function postsReducer(state: PostState | undefined, action: Action) {
  return _postsReducer(state, action);
}
