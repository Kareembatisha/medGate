import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-hero',
  standalone: true,
  imports: [],
  templateUrl: './reusable-hero.component.html',
  styleUrl: './reusable-hero.component.scss',
})
export class ReusableHeroComponent {
  @Input() title: string = ''; // ✅ dynamic title
}
