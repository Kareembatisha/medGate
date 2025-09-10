import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service-details-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './service-details-hero.component.html',
  styleUrls: ['./service-details-hero.component.scss'],
})
export class ServiceDetailsHeroComponent {
  @Input() imageUrl: string = 'assets/default-image.jpg';
  @Input() imageAlt: string = 'Service Image';
  @Input() title: string = 'Service Title';
  @Input() description: string = 'Service description goes here.';
  @Input() buttonText: string = 'Get A Quote';
  @Input() showButton: boolean = true;
}
