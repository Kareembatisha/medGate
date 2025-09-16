import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-description',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.scss'],
})
export class ServiceDescriptionComponent {
  @Input() title: string = 'SERVICES.SERVICE_DETAILS';
  @Input() subTitle: string = '';
  @Input() description: string = '';
  @Input() ctaText: string = 'SERVICES.CTA_TEXT';
}
