import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyOneError',
  standalone: true,
})
export class OneValidatorPipe implements PipeTransform {
  transform(allErrors: any, errorsPripority: string[]): any {
    if (!allErrors) {
      return null;
    }

    const onlyOneError: any = {};

    errorsPripority.some(
      (error) => allErrors[error] && (onlyOneError[error] = allErrors[error])
    );

    return onlyOneError;
  }
}
