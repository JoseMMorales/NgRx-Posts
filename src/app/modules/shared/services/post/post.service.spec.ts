import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import {
  PostResponseMocked,
  PostResponseReverseMocked,
  postMocked,
  postSecondMocked,
  postThirdMocked,
} from 'src/app/modules/core/store/testing/mock/post.mock';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add user id in post (prev)', () => {
    expect(service.addUserIdInPost(PostResponseMocked, postMocked)).toEqual(
      postThirdMocked
    );
  });

  it('should add user id in post (current)', () => {
    expect(
      service.addUserIdInPost(PostResponseReverseMocked, postMocked)
    ).toEqual(postThirdMocked);
  });
});
