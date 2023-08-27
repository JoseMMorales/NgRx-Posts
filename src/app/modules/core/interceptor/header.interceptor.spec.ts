import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInterceptor } from './header.interceptor';

describe('HeaderInterceptor', () => {
  let component: HeaderInterceptor;
  let fixture: ComponentFixture<HeaderInterceptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderInterceptor],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInterceptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
