import { TestBed } from '@angular/core/testing';

import { PostHttpService } from './post-http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PostHttpService', () => {
  let service: PostHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostHttpService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(PostHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
