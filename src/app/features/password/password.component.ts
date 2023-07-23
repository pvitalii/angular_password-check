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
    switch (true) {
      case this.password.length === 0:
        this.status = STATUS.EMPTY;
        break

      case REGEX.STRONG.test(this.password):
        this.status = STATUS.STRONG;
        break

      case REGEX.MEDIUM.test(this.password):
        this.status = STATUS.MEDIUM;
        break

      case REGEX.EASY.test(this.password):
        this.status = STATUS.EASY;
        break
      
      case this.password.length < 8:
        this.status = STATUS.INVALID;
        break
    }
  }

}
