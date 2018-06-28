import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static integer(control: AbstractControl): ValidationErrors {
    if (!/^[0-9]+$/.test(control.value)) {
      return { integer: true };
    }
  }

  static number(control: AbstractControl): ValidationErrors {
    if (!/^[0-9\.]+$/.test(control.value)) {
      return { number: true };
    }
  }

  static realEmail(control: AbstractControl): ValidationErrors {
    // tslint:disable-next-line:max-line-length
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value)) {
      return { realEmail: true };
    }
  }

  static postCode(control: AbstractControl): ValidationErrors {
    if (!/^\d{2}-\d{3}$/.test(control.value)) {
      return { postCode: true };
    }
  }

  static nipNumber(control: AbstractControl): ValidationErrors {
    if (!/^[\d-]{10,}$/.test(control.value)) {
      return { nipNumber: true };
    }

    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const nip = control.value.replace(/[\s-]/g, '');

    if (nip.length === 10 && parseInt(nip, 10) > 0) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += nip[i] * weights[i];
      }
      return (sum % 11) !== Number(nip[9]) ? { nipNumber: true } : null;
    } else {
      return { nipNumber: true };
    }
  }
}
