import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email: string = '';

  constructor(private translate: TranslateService) {}

  subscribe() {
    if (this.email && this.validateEmail(this.email)) {
      console.log('Subscribed with email:', this.email);

      // ✅ SweetAlert success as toast
      Swal.fire({
        icon: 'success',
        title: this.translate.instant('FOOTER.SUBSCRIBE.SUCCESS_TITLE'),
        text: this.translate.instant('FOOTER.SUBSCRIBE.SUCCESS_MSG'),
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      this.email = '';
    } else {
      // ❌ SweetAlert error as toast
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('FOOTER.SUBSCRIBE.ERROR_TITLE'),
        text: this.translate.instant('FOOTER.SUBSCRIBE.ERROR_MSG'),
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}
