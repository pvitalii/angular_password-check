import { Component } from '@angular/core';
import { STATUS } from './utils/status.enum';
import { REGEX } from './utils/regex.const';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  password = '';
  status = '';

  passwordCheck(): void {
    if (this.password.length < 8) {
      this.status = STATUS.INVALID;
    }
    
    if (this.password.length === 0) {
      this.status = STATUS.EMPTY;
    }
    
    if (REGEX.EASY.test(this.password)) {
      this.status = STATUS.EASY;
    }

    if (REGEX.MEDIUM.test(this.password)) {
      this.status = STATUS.MEDIUM;
    }

    if (REGEX.STRONG.test(this.password)) {
      this.status = STATUS.STRONG;
    }
  }

}
