import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-partners.component.html', // <-- updated here
  styleUrls: ['./our-partners.component.scss'],
})
export class OurPartnersComponent implements OnInit, OnDestroy {
  partners = [
    { name: 'Abba Private Hospital', image: 'assets/partener-1.png' },
    { name: 'KAFD', image: 'assets/partener-2.png' },
    { name: 'Princess Nourah University', image: 'assets/partener-3.png' },
    { name: 'Partner 4', image: 'assets/partener-4.png' },
    { name: 'Partner 5', image: 'assets/partener-5.png' },
  ];

  animationDuration = 30; // seconds for one complete loop
  animationState: 'running' | 'paused' = 'running';
  private animationInterval: any;

  ngOnInit() {
    this.startAnimation();
  }

  pauseAnimation() {
    this.animationState = 'paused';
  }

  resumeAnimation() {
    this.animationState = 'running';
  }

  startAnimation() {
    this.animationState = 'running';
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
