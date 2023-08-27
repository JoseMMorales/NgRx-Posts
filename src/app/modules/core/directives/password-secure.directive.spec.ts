import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSecureDirective } from './password-secure.directive';

describe('PasswordSecureDirective', () => {
  let component: PasswordSecureDirective;
  let fixture: ComponentFixture<PasswordSecureDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSecureDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordSecureDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
