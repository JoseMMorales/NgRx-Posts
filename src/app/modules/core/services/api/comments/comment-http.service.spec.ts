import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHttpService } from './comment-http.service';

describe('CommentHttpService', () => {
  let component: CommentHttpService;
  let fixture: ComponentFixture<CommentHttpService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentHttpService],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentHttpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
