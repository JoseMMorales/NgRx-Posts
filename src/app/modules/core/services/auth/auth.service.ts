import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Fake auth service will return true if email is returned from localStorage

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  isLoggedIn(): boolean {
    const email: string | null = localStorage.getItem('email');

    email ? this.loggedIn$.next(true) : this.loggedIn$.next(false);
    return this.loggedIn$.getValue();
  }
}
