import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  email: string = '';
  currentLang: string = 'en';

  // Footer nav items mirroring header
  navItems = [
    { labelKey: 'HEADER.HOME', link: '/' },
    { labelKey: 'HEADER.SERVICES', link: '/services' },
    { labelKey: 'HEADER.ABOUT', link: '/about-us' },
    { labelKey: 'HEADER.FAQS', link: '/faqs' },
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.currentLang = translate.currentLang || 'en';
  }

  ngOnInit() {}

  subscribe() {
    if (this.email && this.validateEmail(this.email)) {
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
