/**
 * Páginas
 */
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';

export const PAGES: any[] = [
	HomeComponent,
	ProjectsComponent,
	ProjectDetailComponent,
	PortfolioComponent,
	PortfolioDetailComponent
];

/**
 * Componentes parciales
 */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const COMPONENTS: any[] = [
	HeaderComponent,
	FooterComponent
];

/**
 * Pipes
 */
export const PIPES: any[] = [];

/**
 * Servicios
 */
export const SERVICES: any[] = [];