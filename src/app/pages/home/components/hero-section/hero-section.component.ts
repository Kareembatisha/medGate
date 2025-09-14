import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, ScrollAnimateDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  constructor(private router: Router) {}

  // Animation helper methods
  hoverAnimation(event: any, animation: string) {
    const element = event.target;
    element.classList.add('animate__animated', animation);

    // Remove animation classes after animation completes
    element.addEventListener(
      'animationend',
      () => {
        element.classList.remove('animate__animated', animation);
      },
      { once: true }
    );
  }

  resetAnimation(event: any) {
    const element = event.target;
    // Remove all animate.css classes
    const classes = element.className
      .split(' ')
      .filter((cls: string) => !cls.startsWith('animate__'));
    element.className = classes.join(' ').trim();
  }

  goToContact() {
    this.router.navigate(['/contact-us']);
  }
}
