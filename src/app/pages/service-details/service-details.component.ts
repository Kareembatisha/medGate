import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceDetailsHeroComponent } from './components/service-details-hero/service-details-hero.component';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';
import { ServicesComponent } from '../home/components/services/services.component';
import { GetStartedComponent } from '../home/components/get-started/get-started.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
  standalone: true,
  imports: [
    ServiceDetailsHeroComponent,
    ServiceDescriptionComponent,
    ServicesComponent,
    GetStartedComponent,
  ],
})
export class ServiceDetailsComponent implements OnInit, OnDestroy {
  serviceId!: string;
  currentService: any;
  private routeSubscription!: Subscription;

  // Array with 6 service objects
  services = [
    {
      id: 1,
      title1: 'SERVICES.MEDICAL_DEVICE_MARKETING_AUTH',
      description1: 'SERVICES.MEDICAL_DEVICE_MARKETING_AUTH_DESC',
      description2: 'SERVICES.MEDICAL_DEVICE_MARKETING_AUTH_LONG_DESC',
      img: 'assets/device-img.png',
    },
    {
      id: 2,
      title1: 'SERVICES.UNIQUE_DEVICE_IDENTIFICATION',
      description1: 'SERVICES.UNIQUE_DEVICE_IDENTIFICATION_DESC',
      description2: 'SERVICES.UNIQUE_DEVICE_IDENTIFICATION_LONG_DESC',
      img: 'assets/medical-img.png',
    },
    {
      id: 3,
      title1: 'SERVICES.NCMDR',
      description1: 'SERVICES.NCMDR_DESC',
      description2: 'SERVICES.NCMDR_LONG_DESC',
      img: 'assets/NCMDR-img.png',
    },
    {
      id: 4,
      title1: 'SERVICES.IMPORTATION_DISTRIBUTION',
      description1: 'SERVICES.IMPORTATION_DISTRIBUTION_DESC',
      description2: 'SERVICES.IMPORTATION_DISTRIBUTION_LONG_DESC',
      img: 'assets/Importation-img.png',
    },
    {
      id: 5,
      title1: 'SERVICES.AUTHORIZED_REPRESENTATIVE',
      description1: 'SERVICES.AUTHORIZED_REPRESENTATIVE_DESC',
      description2: 'SERVICES.AUTHORIZED_REPRESENTATIVE_LONG_DESC',
      img: 'assets/AR-img.png',
    },
    {
      id: 6,
      title1: 'SERVICES.PRODUCT_CLASSIFICATION_SYSTEM',
      description1: 'SERVICES.PRODUCT_CLASSIFICATION_SYSTEM_DESC',
      description2: 'SERVICES.PRODUCT_CLASSIFICATION_SYSTEM_LONG_DESC',
      img: 'assets/PCS-img.png',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('id')!;
      console.log('Service ID:', this.serviceId);

      // Find the service by ID
      this.currentService = this.services.find(
        (service) => service.id.toString() === this.serviceId
      );
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
