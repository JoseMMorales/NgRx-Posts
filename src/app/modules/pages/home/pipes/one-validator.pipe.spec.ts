import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneValidatorPipe } from './one-validator.pipe';

describe('OneValidatorPipe', () => {
  let component: OneValidatorPipe;
  let fixture: ComponentFixture<OneValidatorPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneValidatorPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(OneValidatorPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
