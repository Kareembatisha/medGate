import { Component } from '@angular/core';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { AboutInfoComponent } from "./components/about-info/about-info.component";
import { AboutUsSliderComponent } from "./components/about-us-slider/about-us-slider.component";
import { OurLocationComponent } from "./components/our-location/our-location.component";
import { GetStartedComponent } from "../home/components/get-started/get-started.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutHeroComponent, AboutInfoComponent, AboutUsSliderComponent, OurLocationComponent, GetStartedComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
