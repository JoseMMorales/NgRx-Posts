import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  map,
  mergeMap,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';

import {
  Actions,
  CreateEffectMetadata,
  createEffect,
  ofType,
} from '@ngrx/effects';
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
} from './posts.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import { PostHttpService } from '../../services/api/posts/post-http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Post } from '../../../shared/models/post.model';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class PostsEffects {
  constructor(
    private store$: Store<AppState>,
    private actions$: Actions,
    private postService: PostHttpService,
    private snackBar: MatSnackBar
  ) {}

  loadPosts$: Observable<
    ({ posts: Post[] } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((postsResponse) => {
            return loadPostsSuccess({ posts: postsResponse });
          }),
          catchError((error) => of(loadPostsFailed({ payload: error })))
        );
      })
    );
  });

  createPosts$: Observable<
    ({ posts: Post[] } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(createPosts),
      withLatestFrom(this.store$),
      mergeMap(([action, storeState]) => {
        return this.postService.createPost(action.post).pipe(
          map((postResponse) => {
            const postsInStore = storeState.posts.posts;
            const postsArrayUpdated = [postResponse, ...postsInStore];

            return createPostsSuccess({ posts: [...postsArrayUpdated] });
          }),
          catchError((error) => of(createPostsFailed({ payload: error })))
        );
      })
    );
  });

  updatePosts$: Observable<
    ({ posts: Post[] } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePosts),
      withLatestFrom(this.store$),
      mergeMap(([action, storeState]) => {
        return this.postService.updatePost(action.post).pipe(
          map((postResponseFromAPI) => {
            const postsInStore = storeState.posts.posts;
            const postsArrayUpdated = postsInStore.map((postInStore) => {
              if (postInStore.id === postResponseFromAPI.id) {
                return postResponseFromAPI;
              }
              return postInStore;
            });

            return createPostsSuccess({ posts: [...postsArrayUpdated] });
          }),
          catchError((error) => of(createPostsFailed({ payload: error })))
        );
      })
    );
  });

  deletePosts$: Observable<
    ({ id: number } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePosts),
      withLatestFrom(this.store$),
      mergeMap(([action, storeState]) => {
        return this.postService.deletePost(action.id).pipe(
          map(() => {
            const postsInStore = storeState.posts.posts;
            const postRemoved = action.id;
            const postsArrayUpdated = postsInStore.filter(
              (post) => post.id !== postRemoved
            );

            return deletePostsSuccess({ posts: [...postsArrayUpdated] });
          }),
          catchError((error) => of(deletePostsFailed({ payload: error })))
        );
      })
    );
  });

  loadComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadComments),
      mergeMap(() => {
        return this.postService.getPostComments().pipe(
          map((commentsResponse) => {
            return loadCommentsSuccess({ comments: [...commentsResponse] });
          }),
          catchError((error) => of(loadCommentsFailed({ payload: error })))
        );
      })
    );
  });

  postsErrors$: Observable<
    | ({ payload: { message: string } } & TypedAction<string>)
    | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          loadPostsFailed,
          createPostsFailed,
          updatePostsFailed,
          deletePostsFailed,
          loadCommentsFailed
        ),
        tap(({ payload }) => {
          this.snackBar.open(payload.message, 'Error!!');
        })
      ),
    { dispatch: false }
  );
}
