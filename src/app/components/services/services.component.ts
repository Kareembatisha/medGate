// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {
  faBullhorn,
  faIdCard,
  faChartLine,
  faTruck,
  faFileAlt,
  faBoxes,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  direction: 'ltr' | 'rtl' = 'ltr';

  constructor(private translate: TranslateService) {}
  faBullhorn = faBullhorn;
  faIdCard = faIdCard;
  faChartLine = faChartLine;
  faTruck = faTruck;
  faFileAlt = faFileAlt;
  faBoxes = faBoxes;
  faChevronLeft = faChevronLeft;
  services = [
    {
      title: 'Medical Device Marketing',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faBullhorn,
      flipDescription:
        'Obtaining marketing authorization for medical devices and IVDs in Saudi Arabia',
    },
    {
      title: 'Medical Device - Unique Device',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faIdCard,
      flipDescription:
        'Unique device identification and registration services for medical devices',
    },
    {
      title: 'Medical Devices Reporting',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faChartLine,
      flipDescription:
        'Comprehensive reporting solutions for medical device compliance',
    },
    {
      title: 'Medical Device Importation',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faTruck,
      flipDescription: 'Streamlined importation processes for medical devices',
    },
    {
      title: 'Medical Device AR Licensing',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faFileAlt,
      flipDescription:
        'Authorized representative licensing services for medical devices',
    },
    {
      title: 'Product Classification System (PCS)',
      description:
        'Classification of medical devices to accurately determine registration requirements',
      icon: faBoxes,
      flipDescription: 'Advanced classification system for medical devices',
    },
  ];

  ngOnInit(): void {
    // Detect current language on init
    this.setDirection(this.translate.currentLang);

    // Listen for language changes
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setDirection(event.lang);
    });
  }

  setDirection(lang: string) {
    // List of RTL languages, extend if needed
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

    this.direction = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
    console.log('Current direction:', this.direction);
  }
}
