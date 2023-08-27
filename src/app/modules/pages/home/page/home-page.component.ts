import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { getIsSpinnerVisible } from 'src/app/modules/core/store/spinner/spinner.selector';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/modules/core/validators/password.validator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  isGLobalSpinnerVisible$: Observable<boolean>;
  loginForm!: FormGroup;

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.isGLobalSpinnerVisible$ = this.store.select(getIsSpinnerVisible);
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    const email: string = this.loginForm.value.email;
    this.loginForm.valid && localStorage.setItem('email', email);
    this.router.navigate(['/posts']);
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), PasswordValidator()],
      ],
    });
  }
}
