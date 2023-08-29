import { TestBed } from '@angular/core/testing';

import { CommentHttpService } from './comment-http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CommentHttpService', () => {
  let service: CommentHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentHttpService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(CommentHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
