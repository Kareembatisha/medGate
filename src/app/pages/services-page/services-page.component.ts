import { Component } from '@angular/core';
import { ServiceHeroComponent } from "./components/service-hero/service-hero.component";
import { ServicesComponent } from "../home/components/services/services.component";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServiceHeroComponent, ServicesComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent {}
