import { Routes } from '@angular/router';
import HomeComponent from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    loadComponent: () => import('@pages/projects/projects.component'),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('@pages/project-detail/project-detail.component'),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('@pages/portfolio/portfolio.component'),
  },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import('@pages/portfolio-detail/portfolio-detail.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
