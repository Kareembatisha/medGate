import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component'; // adjust the path

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // first path is home
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'profile', component: ProfileComponent },
      // add more child routes here
    ],
  },
];
