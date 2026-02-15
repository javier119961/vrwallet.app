import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@core/layouts/main-layout/main-layout.component';
import { DashboardPageComponent } from './feature/dashboard/pages/dashboard-page/dashboard-page.component';
import AuthLayoutComponent from "@core/layouts/auth-layout/auth-layout.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo9' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./feature/auth/auth.routes')
  },
  {
    path: 'demo9',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
      },
    ],
  },
];
