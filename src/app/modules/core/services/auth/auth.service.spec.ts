import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationService } from './auth.service';

describe('AuthenticationService', () => {
  let component: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationService],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
