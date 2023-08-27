import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsPageComponent } from './page/posts-page.component';
import { FormPostComponent } from '../../shared/components/form-post/form-post.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';

@NgModule({
  declarations: [PostsPageComponent, SearchPostsComponent],
  imports: [PostsRoutingModule, SharedModule, FormPostComponent],
})
export class PostsModule {}
