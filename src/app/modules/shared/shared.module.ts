import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DialogService } from './services/dialog/dialog.service';
import { PostService } from './services/post/post.service';

const ANGULAR_MODULES = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [ANGULAR_MODULES],
  exports: [ANGULAR_MODULES],
  providers: [DialogService, PostService],
})
export class SharedModule {}
