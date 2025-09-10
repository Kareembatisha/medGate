import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email: string = '';

  subscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      // Add your subscription logic here
      this.email = '';
    }
  }
}
