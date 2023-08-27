import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

import { Comment } from '../../../../shared/models/comment.model';

@Injectable()
export class CommentHttpService {
  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<Comment[]> {
    const endPoint: string = `${environment.baseURL}/comments?postId=${postId}`;

    return this.http.get<Comment[]>(endPoint);
  }
}
