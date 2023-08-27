import { createSelector } from '@ngrx/store';
import { getIsPostsLoading } from '../posts/posts.selector';

export const getIsSpinnerVisible = createSelector(
  getIsPostsLoading,

  (isPostsLoading) => {
    const isSpinnerVisible: boolean = isPostsLoading;

    return isSpinnerVisible;
  }
);
