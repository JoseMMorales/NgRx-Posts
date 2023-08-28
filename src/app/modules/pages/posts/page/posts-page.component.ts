import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, skip, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';
import {
  deletePosts,
  loadComments,
  loadPosts,
  updatePosts,
} from 'src/app/modules/core/store/posts/posts.actions';
import { getPosts } from 'src/app/modules/core/store/posts/posts.selector';

import {
  buttonTextEditForm,
  emptyPost,
  titleEditForm,
} from 'src/app/modules/shared/const/post';
import { Post } from 'src/app/modules/shared/models/post.model';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { getIsSpinnerVisible } from 'src/app/modules/core/store/spinner/spinner.selector';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit, OnDestroy {
  postList: Post[] = [];
  postToRender: Post[] = [];
  destroyed$: Subject<void> = new Subject<void>();
  isGLobalSpinnerVisible$: Observable<boolean>;

  constructor(private store: Store, private dialogService: DialogService) {
    this.store.dispatch(loadPosts());
    this.store.dispatch(loadComments());
    this.isGLobalSpinnerVisible$ = this.store.select(getIsSpinnerVisible);
  }

  ngOnInit(): void {
    this.getAndSetPosts();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  deletePost(postId: number | undefined): void {
    !!postId && this.store.dispatch(deletePosts({ id: postId }));
  }

  updatePost(post: Post): void {
    const postToUpdate: Post = post;

    this.dialogService
      .dialogDispatch(titleEditForm, buttonTextEditForm)
      .subscribe((post: Post) => {
        let postUpdated = emptyPost;

        if (post) {
          postUpdated = {
            ...post,
            userId: postToUpdate.userId,
            id: postToUpdate.id,
          };

          this.store.dispatch(updatePosts({ post: { ...postUpdated } }));
        }
      });
  }

  postsFiltered(postsFiltered: Post[]): void {
    this.postToRender = postsFiltered;
  }

  sortPosts(value: string): void {
    let arraySorted: Post[] = [];

    value === 'ASCENDING'
      ? (arraySorted = [...this.postToRender].sort((a, b) =>
          a.title > b.title ? 1 : -1
        ))
      : (arraySorted = [...this.postToRender].sort((a, b) =>
          a.title < b.title ? 1 : -1
        ));

    this.postToRender = arraySorted;
  }

  private getAndSetPosts(): void {
    this.store
      .select(getPosts)
      .pipe(takeUntil(this.destroyed$), skip(1))
      .subscribe((res) => {
        this.postList = res;
        this.postToRender = this.postList;
      });
  }
}
