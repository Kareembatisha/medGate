import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MedGate';
  
  // Global loader signal
  loading = signal(true);

  constructor() {
    // Simulate initial app loading time
    setTimeout(() => {
      this.loading.set(false);
    }, 2000); // You can adjust this timing as needed
  }
}