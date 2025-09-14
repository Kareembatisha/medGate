import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.scss'],
  standalone: true,
  imports:[TranslateModule,ScrollAnimateDirective]
})
export class AboutHeroComponent {}
