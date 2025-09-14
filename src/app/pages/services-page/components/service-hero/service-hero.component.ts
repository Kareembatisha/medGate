// service-hero.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimateDirective],
  templateUrl: './service-hero.component.html',
  styleUrls: ['./service-hero.component.scss']
})
export class ServiceHeroComponent {
  // Component logic can be added here if needed
    constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact-us']);
  }
}