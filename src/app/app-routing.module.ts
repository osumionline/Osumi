import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';

const routes: Routes = [
	{ path: '',              component: HomeComponent },
	{ path: 'projects',      component: ProjectsComponent },
	{ path: 'project/:id',   component: ProjectDetailComponent },
	{ path: 'portfolio',     component: PortfolioComponent },
	{ path: 'portfolio/:id', component: PortfolioDetailComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}