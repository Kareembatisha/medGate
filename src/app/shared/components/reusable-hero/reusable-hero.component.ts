import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reusable-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reusable-hero.component.html',
  styleUrl: './reusable-hero.component.scss',
})
export class ReusableHeroComponent {
  @Input() title: string = ''; // ✅ dynamic title
}
