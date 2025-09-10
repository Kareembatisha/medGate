import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  onRegister() {
    // Handle register button click
    console.log('Register button clicked');
    // Add navigation or modal opening logic here
  }
}
