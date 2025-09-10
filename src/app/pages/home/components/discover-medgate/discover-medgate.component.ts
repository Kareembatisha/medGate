import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-discover-medgate',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './discover-medgate.component.html', // <-- updated here
  styleUrls: ['./discover-medgate.component.scss']
})
export class DiscoverMedgateComponent { }
