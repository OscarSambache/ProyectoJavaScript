import {AbstractControl, ValidatorFn} from '@angular/forms';

export function telefonoValidator(phoneExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const phone = phoneExp.test(control.value);
    return !phone ? {'phoneNumber': {value: control.value}} : null;
  };
}
