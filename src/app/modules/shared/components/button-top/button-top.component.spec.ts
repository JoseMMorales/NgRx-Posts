import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTopComponent } from './button-top.component';
import { DestroyService } from '../../services/destroy/destroy.service';

describe('ButtonTopComponent', () => {
  let component: ButtonTopComponent;
  let fixture: ComponentFixture<ButtonTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DestroyService],
      imports: [ButtonTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
