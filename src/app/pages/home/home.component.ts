import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { ServicesComponent } from "../../components/services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
