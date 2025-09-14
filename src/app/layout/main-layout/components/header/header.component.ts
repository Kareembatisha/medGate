import {
  Component,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isMobileView = false;
  currentLang: string = 'en';
  isSticky = false;

  // Navigation items with translation keys
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isSticky = scrollPosition > 50;
    }
  }

  ngOnInit() {
    this.checkScreenSize();
    this.setInitialDirection();
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 992;
      if (!this.isMobileView) {
        this.isMenuOpen = false;
      }
    }
  }

  setInitialDirection() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = this.currentLang;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;

      // Add animation class for language switch
      document.documentElement.classList.add('language-changing');
      setTimeout(() => {
        document.documentElement.classList.remove('language-changing');
      }, 500);
    }
  }

  get isRTL(): boolean {
    return this.currentLang === 'ar';
  }
}
