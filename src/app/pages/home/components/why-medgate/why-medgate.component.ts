import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-why-medgate',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimateDirective],
  templateUrl: './why-medgate.component.html',
  styleUrls: ['./why-medgate.component.scss'],
})
export class WhyMedgateComponent {
  cards = [
    {
      title: 'WHY_MEDGATE.CARD_1_TITLE',
      description: 'WHY_MEDGATE.CARD_1_DESC',
      image: 'assets/why-section-4.svg',
    },
    {
      title: 'WHY_MEDGATE.CARD_2_TITLE',
      description: 'WHY_MEDGATE.CARD_2_DESC',
      image: 'assets/why-section-3.svg',
    },
    {
      title: 'WHY_MEDGATE.CARD_3_TITLE',
      description: 'WHY_MEDGATE.CARD_3_DESC',
      image: 'assets/why-section-2.svg',
    },
    {
      title: 'WHY_MEDGATE.CARD_4_TITLE',
      description: 'WHY_MEDGATE.CARD_4_DESC',
      image: 'assets/why-section-1.svg',
    },
  ];
}
