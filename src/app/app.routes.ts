import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services-page/services-page.component').then(
            (m) => m.ServicesPageComponent
          ),
      },
      {
        path: 'services/:id',
        loadComponent: () =>
          import('./pages/service-details/service-details.component').then(
            (m) => m.ServiceDetailsComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./pages/faqs/faqs.component').then((m) => m.FAQsComponent),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./pages/about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ),
      },
    ],
  },
];
