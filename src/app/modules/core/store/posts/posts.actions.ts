import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from '../../../shared/models/post.model';
import { Comment } from 'src/app/modules/shared/models/comment.model';

export enum PostActions {
  LOAD_POSTS = 'LOAD_POSTS',
  CREATE_POSTS = 'CREATE_POSTS',
  UPDATE_POSTS = 'UPDATE_POSTS',
  DELETE_POSTS = 'DELETE_POSTS',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
}

export const PostsLoadActions = createActionGroup({
  source: PostActions.LOAD_POSTS,
  events: {
    load: emptyProps(),
    'load success': props<{ posts: Post[] }>(),
    'load failed': props<{ payload: { message: string } }>(),
  },
});

export const PostsCreateActions = createActionGroup({
  source: PostActions.CREATE_POSTS,
  events: {
    create: props<{ post: Post }>(),
    'create success': props<{ posts: Post[] }>(),
    'create failed': props<{ payload: { message: string } }>(),
  },
});

export const PostsUpdateActions = createActionGroup({
  source: PostActions.UPDATE_POSTS,
  events: {
    update: props<{ post: Post }>(),
    'update success': props<{ posts: Post[] }>(),
    'update failed': props<{ payload: { message: string } }>(),
  },
});

export const PostsDeleteActions = createActionGroup({
  source: PostActions.DELETE_POSTS,
  events: {
    delete: props<{ id: number }>(),
    'delete success': props<{ posts: Post[] }>(),
    'delete failed': props<{ payload: { message: string } }>(),
  },
});

export const PostsCommentActions = createActionGroup({
  source: PostActions.LOAD_COMMENTS,
  events: {
    'comment load': emptyProps(),
    'comment success': props<{ comments: Comment[] }>(),
    'comment failed': props<{ payload: { message: string } }>(),
  },
});
