import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { FormPostComponent } from 'src/app/modules/shared/components/form-post/form-post.component';
import { Post } from '../../models/post.model';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  dialogDispatch(title: string, button: string): Observable<Post> {
    const dialogRef = this.dialog.open(FormPostComponent, {
      disableClose: true,
      data: {
        titleForm: title,
        buttonText: button,
      },
    });

    return dialogRef.afterClosed();
  }
}
