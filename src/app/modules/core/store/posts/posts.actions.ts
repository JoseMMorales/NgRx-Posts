import { createAction, props } from '@ngrx/store';
import { Post } from '../../../shared/models/post.model';
import { Comment } from 'src/app/modules/shared/models/comment.model';

export enum PostActions {
  LOAD_POSTS = 'LOAD_POSTS',
  LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_FAILED = 'LOAD_POSTS_FAILED',
  CREATE_POSTS = 'CREATE_POSTS',
  CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS',
  CREATE_POSTS_FAILED = 'CREATE_POSTS_FAILED',
  UPDATE_POSTS = 'UPDATE_POSTS',
  UPDATE_POSTS_SUCCESS = 'UPDATE_POSTS_SUCCESS',
  UPDATE_POSTS_FAILED = 'UPDATE_POSTS_FAILED',
  DELETE_POSTS = 'DELETE_POSTS',
  DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS',
  DELETE_POSTS_FAILED = 'DELETE_POSTS_FAILED',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
  LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS',
  LOAD_COMMENTS_FAILED = 'LOAD_COMMENTS_FAILED',
}

export const loadPosts = createAction(PostActions.LOAD_POSTS);
export const loadPostsSuccess = createAction(
  PostActions.LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
export const loadPostsFailed = createAction(
  PostActions.LOAD_POSTS_FAILED,
  props<{ payload: { message: string } }>()
);

export const createPosts = createAction(
  PostActions.CREATE_POSTS,
  props<{ post: Post }>()
);
export const createPostsSuccess = createAction(
  PostActions.CREATE_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
export const createPostsFailed = createAction(
  PostActions.CREATE_POSTS_FAILED,
  props<{ payload: { message: string } }>()
);

export const updatePosts = createAction(
  PostActions.UPDATE_POSTS,
  props<{ post: Post }>()
);
export const updatePostsSuccess = createAction(
  PostActions.UPDATE_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
export const updatePostsFailed = createAction(
  PostActions.UPDATE_POSTS_FAILED,
  props<{ payload: { message: string } }>()
);

export const deletePosts = createAction(
  PostActions.DELETE_POSTS,
  props<{ id: number }>()
);
export const deletePostsSuccess = createAction(
  PostActions.DELETE_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
export const deletePostsFailed = createAction(
  PostActions.DELETE_POSTS_FAILED,
  props<{ payload: { message: string } }>()
);

export const loadComments = createAction(PostActions.LOAD_COMMENTS);
export const loadCommentsSuccess = createAction(
  PostActions.LOAD_COMMENTS_SUCCESS,
  props<{ comments: Comment[] }>()
);
export const loadCommentsFailed = createAction(
  PostActions.LOAD_COMMENTS_FAILED,
  props<{ payload: { message: string } }>()
);
