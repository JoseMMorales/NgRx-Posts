import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './posts.state';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getIsPostsLoading = createSelector(getPostsState, (state) => {
  return state.isLoading;
});
