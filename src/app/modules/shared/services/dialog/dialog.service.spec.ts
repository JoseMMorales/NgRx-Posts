import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  let component: DialogService;
  let fixture: ComponentFixture<DialogService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogService],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
