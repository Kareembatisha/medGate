import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component'; // adjust path
import { FAQsComponent } from './pages/faqs/faqs.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // home page
      { path: 'services', component: ServicesPageComponent }, // services page
      { path: 'services/:id', component: ServiceDetailsComponent }, // service details
      { path: 'contact-us', component: ContactUsComponent }, // ✅ new Contact Us route
      { path: 'faqs', component: FAQsComponent }, // ✅ new FAQs route
    ],
  },
];
