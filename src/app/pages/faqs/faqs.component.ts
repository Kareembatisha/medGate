import { Component } from '@angular/core';
import { GetStartedComponent } from "../home/components/get-started/get-started.component";
import { ReusableHeroComponent } from "../../shared/components/reusable-hero/reusable-hero.component";
import { FaqComponent } from "./components/faq/faq.component";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [GetStartedComponent, ReusableHeroComponent, FaqComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent {

}
