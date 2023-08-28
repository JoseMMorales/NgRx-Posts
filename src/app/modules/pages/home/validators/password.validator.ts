import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    const upperCase = /[A-Z]+/.test(value);
    const lowerCase = /[a-z]+/.test(value);
    const numberCase = /[0-9]+/.test(value);

    const passwordValid = upperCase && lowerCase && numberCase;

    return !passwordValid ? { passwordSecure: true } : null;
  };
}
