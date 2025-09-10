// service-hero.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service-hero',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './service-hero.component.html',
  styleUrls: ['./service-hero.component.scss']
})
export class ServiceHeroComponent {
  // Component logic can be added here if needed
}