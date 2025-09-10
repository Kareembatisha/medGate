import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isMobileView = false;
  currentLang: string = 'en';

  // Navigation items with translation keys
  navItems = [
    { labelKey: 'HEADER.HOME', link: '/' },
    { labelKey: 'HEADER.SERVICES', link: '/services' },
    { labelKey: 'HEADER.SOLUTIONS', link: '/solutions' },
    { labelKey: 'HEADER.ABOUT', link: '/about' },
    { labelKey: 'HEADER.FAQS', link: '/faqs' },
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || 'en';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 992;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  get isRTL(): boolean {
    return this.currentLang === 'ar';
  }
}
