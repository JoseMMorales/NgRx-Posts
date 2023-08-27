import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsSpinnerVisible } from './modules/core/store/spinner/spinner.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isGLobalSpinnerVisible$: Observable<boolean>;

  constructor(private store: Store) {
    this.isGLobalSpinnerVisible$ = this.store.select(getIsSpinnerVisible);
  }
}
