import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component'; // adjust the path
import { ServicesPageComponent } from './pages/services-page/services-page.component'; // adjust path to your new component
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // first path is home
      { path: 'services', component: ServicesPageComponent }, // new route for Services page
      { path: 'services/:id', component: ServiceDetailsComponent }, // details page
      // { path: 'profile', component: ProfileComponent },
      // add more child routes here
    ],
  },
];
