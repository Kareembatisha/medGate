// services.component.ts
import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LangChangeEvent,
  TranslateService,
  TranslateModule,
} from '@ngx-translate/core';
import {
  faBullhorn,
  faIdCard,
  faChartLine,
  faTruck,
  faFileAlt,
  faBoxes,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ScrollAnimateDirective,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  direction: 'ltr' | 'rtl' = 'ltr';
  @Input() showViewButton: boolean = true;
  @Input() showOnlyThree: boolean = false;

  @ViewChild('servicesSection') servicesSection!: ElementRef;

  private observer!: IntersectionObserver;
  private hasLoaded = false;

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
      id: 1,
      title: 'SERVICES.MEDICAL_DEVICE_MARKETING_AUTH',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.MEDICAL_DEVICE_MARKETING_AUTH_DESC',
      icon: 'assets/mdma-icon.svg',
    },
    {
      id: 2,
      title: 'SERVICES.UNIQUE_DEVICE_IDENTIFICATION',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.UNIQUE_DEVICE_IDENTIFICATION_DESC',
      icon: 'assets/UDI-icon.svg',
    },
    {
      id: 3,
      title: 'SERVICES.NCMDR',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.NCMDR_DESC',
      icon: 'assets/NCMDR-icon.svg',
    },
    {
      id: 4,
      title: 'SERVICES.IMPORTATION_DISTRIBUTION',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.IMPORTATION_DISTRIBUTION_DESC',
      icon: 'assets/Importation-icon.svg',
    },
    {
      id: 5,
      title: 'SERVICES.AUTHORIZED_REPRESENTATIVE',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.AUTHORIZED_REPRESENTATIVE_DESC',
      icon: 'assets/ar-icon.svg',
    },
    {
      id: 6,
      title: 'SERVICES.PRODUCT_CLASSIFICATION_SYSTEM',
      description: 'SERVICES.CLASSIFICATION_DESCRIPTION',
      flipDescription: 'SERVICES.PRODUCT_CLASSIFICATION_SYSTEM_DESC',
      icon: 'assets/PCS-icon.svg',
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

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '200px 0px', // Load 200px before entering viewport
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasLoaded) {
          this.hasLoaded = true;
          this.preloadImages();
          this.observer.disconnect();
        }
      });
    }, options);

    if (this.servicesSection) {
      this.observer.observe(this.servicesSection.nativeElement);
    }
  }

  private preloadImages(): void {
    // Preload service icons
    this.services.forEach((service) => {
      const img = new Image();
      img.src = service.icon;
    });
  }

  setDirection(lang: string) {
    // List of RTL languages, extend if needed
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    this.direction = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
  }

  get displayedServices() {
    // If flag is true, return only first 3 services
    return this.showOnlyThree ? this.services.slice(0, 3) : this.services;
  }

  get viewButtonText(): string {
    return this.showOnlyThree
      ? 'BACK_TO_ALL_SERVICES'
      : 'SERVICES.VIEW_SERVICES';
  }
}
