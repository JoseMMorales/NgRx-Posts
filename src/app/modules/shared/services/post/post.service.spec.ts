import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let component: PostService;
  let fixture: ComponentFixture<PostService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostService],
    }).compileComponents();

    fixture = TestBed.createComponent(PostService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
