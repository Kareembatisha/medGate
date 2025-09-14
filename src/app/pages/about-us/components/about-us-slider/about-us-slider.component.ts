import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us-slider',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-us-slider.component.html',
  styleUrl: './about-us-slider.component.scss',
})
export class AboutUsSliderComponent {

}
