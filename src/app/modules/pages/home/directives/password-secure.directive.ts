import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';

@Directive({
  selector: '[passwordSecure]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordSecureDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class PasswordSecureDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return PasswordValidator()(control);
  }
}
