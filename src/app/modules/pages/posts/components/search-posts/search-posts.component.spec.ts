import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPostsComponent } from './search-posts.component';

describe('SearchPostsComponent', () => {
  let component: SearchPostsComponent;
  let fixture: ComponentFixture<SearchPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPostsComponent],
      imports: [
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
