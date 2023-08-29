import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  BehaviorSubject,
  Subject,
  debounceTime,
  fromEvent,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-button-top',
  template: `<button
    *ngIf="showBtn$ | async"
    (click)="scrollToTop()"
    class="button-top"
  >
    <mat-icon>arrow_upward</mat-icon>
  </button>`,
  styleUrls: ['./button-top.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ButtonTopComponent implements OnDestroy {
  showBtn$ = new BehaviorSubject<boolean>(false);
  destroyed$: Subject<void> = new Subject<void>();

  constructor() {
    this.hideShowTopButton();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  dealWithScroll(scrollY: number): void {
    scrollY > 160 ? this.showBtn$.next(true) : this.showBtn$.next(false);
  }

  scrollToTop(): void {
    (function smoothscroll(): void {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  private hideShowTopButton(): void {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(200), takeUntil(this.destroyed$))
      .subscribe(() => this.dealWithScroll(window.scrollY));
  }
}
