import { Component } from '@angular/core';
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
  
}
