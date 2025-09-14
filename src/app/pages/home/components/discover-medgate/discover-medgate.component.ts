import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-medgate',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimateDirective],
  templateUrl: './discover-medgate.component.html',
  styleUrls: ['./discover-medgate.component.scss']
})
export class DiscoverMedgateComponent {
  constructor(private router: Router) {}

  // Optional: Handle video play functionality
  onPlayVideo() {
    // Add video play logic here
    console.log('Play video clicked');
  }

  // Optional: Handle register button click
  onRegister() {
    // Add register logic here
    console.log('Register button clicked');
  }
  goToContact() {
    this.router.navigate(['/contact-us']);
  }
}