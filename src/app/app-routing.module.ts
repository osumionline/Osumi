import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/modules/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('src/app/modules/pages/projects/projects.component'),
  },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('src/app/modules/pages/project-detail/project-detail.component'),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('src/app/modules/pages/portfolio/portfolio.component'),
  },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import(
        'src/app/modules/pages/portfolio-detail/portfolio-detail.component'
      ),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
