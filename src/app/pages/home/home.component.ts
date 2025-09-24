import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyMedgateComponent } from './components/why-medgate/why-medgate.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { DiscoverMedgateComponent } from './components/discover-medgate/discover-medgate.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    HeroSectionComponent,
    ServicesComponent,
    WhyMedgateComponent,
    OurPartnersComponent,
    DiscoverMedgateComponent,
    GetStartedComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1500); // show loader for 1.5 sec
  }
}
