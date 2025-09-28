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
    { labelKey: 'HEADER.ABOUT', link: '/about-us' },
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

    // Set document direction - all new languages are LTR (left-to-right)
    document.documentElement.dir = 'ltr';

    // Set appropriate language code for HTML lang attribute
    const langMap: { [key: string]: string } = {
      en: 'en',
      zh: 'zh-CN', // Simplified Chinese
      de: 'de', // German
      fr: 'fr', // French
    };

    document.documentElement.lang = langMap[lang] || lang;
  }

  // Since Arabic is removed, RTL is no longer needed
  // Keeping this for compatibility but it will always return false
  get isRTL(): boolean {
    return false;
  }
}
