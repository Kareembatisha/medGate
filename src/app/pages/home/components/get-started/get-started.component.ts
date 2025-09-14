import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  constructor(private router: Router) {}

  onRegister() {
    // Navigate to contact-us page
    this.router.navigate(['/contact-us']);
  }
}
