import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-info',
  standalone: true,
  imports: [TranslateModule,ScrollAnimateDirective],
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.scss',
})
export class AboutInfoComponent {}
