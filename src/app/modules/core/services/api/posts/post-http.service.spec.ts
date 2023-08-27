import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHttpService } from './post-http.service';

describe('PostHttpService', () => {
  let component: PostHttpService;
  let fixture: ComponentFixture<PostHttpService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostHttpService],
    }).compileComponents();

    fixture = TestBed.createComponent(PostHttpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
