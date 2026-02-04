import { Routes } from '@angular/router';
import {MainLayoutComponent} from "@core/layouts/main-layout/main-layout.component";
import {DashboardPageComponent} from "./feature/dashboard/pages/dashboard-page/dashboard-page.component";


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo9' },
  {
    path: 'demo9',
    component: MainLayoutComponent,
    children: [
      { 
        path: '', 
        component: DashboardPageComponent 
      },
    ],
  }
];
