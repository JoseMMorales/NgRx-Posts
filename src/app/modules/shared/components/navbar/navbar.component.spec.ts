import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/modules/core/store/app.state';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StoreMock } from 'src/app/modules/core/store/testing/store-mock';

import { PostService } from '../../services/post/post.service';
import { DialogService } from '../../services/dialog/dialog.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, StoreModule.forRoot(appReducer)],
      providers: [
        {
          provider: Store,
          useClass: StoreMock,
        },
        PostService,
        DialogService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
