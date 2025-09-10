import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service-description',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.scss'],
})
export class ServiceDescriptionComponent {
  
  @Input() title: string = 'SERVICES.SERVICE_DETAILS';
  @Input() subTitle: string = '';
  @Input() description: string = '';
  @Input() ctaText: string = 'Get Started';
}
