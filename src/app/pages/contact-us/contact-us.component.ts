import { Component } from '@angular/core';
import { ReusableHeroComponent } from '../../shared/components/reusable-hero/reusable-hero.component';
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReusableHeroComponent, ContactComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
