import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { Project } from 'src/app/model/project.model';

@Component({
	selector: 'app-portfolio-detail',
	templateUrl: './portfolio-detail.component.html',
	styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
	projects: ProjectInfoInterface[] = [
		{
			id: 'appsorteos',
			title: 'App Sorteos',
			description: '<p>Aplicación web para crear sorteos en Facebook. Permite varios clientes o proyectos, gestionar varios tipos de sorteos, programarlos y ver estadísticas de los participantes.</p>',
			photos: 7
		},
		{
			id: 'blog-oinarri',
			title: 'Blog Oinarri',
			description: '<p>Creación de tema personalizado para Wordpress para el blog de Oinarri SGR.</p>',
			photos: 3
		},
		{
			id: 'ediciones-la-bahia',
			title: 'Ediciones La Bahía',
			description: '<p>Página web para Ediciones La Bahía. Se trata de un gestor de contenidos para manejar colecciones, publicaciones, autores, etc de la editorial.</p>',
			photos: 8
		},
		{
			id: 'eiser',
			title: 'Eiser',
			description: '<p>Página web para Eiser Hogares Ecoeficientes. Gestor de contenido con multiples gamas, productos, galerías de fotos y noticias.</p>',
			photos: 7
		},
		{
			id: 'modelos-punto-azul',
			title: 'Modelos con un punto azul',
			description: '<p>Aplicación para Facebook para crear tu propia portada de revista personalizandola con distintos aspectos y efectos.</p>',
			photos: 5
		}
	];
	selectedProject: Project = new Project();
	selectedPhoto: number = 1;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params.id;
			const ind: number = this.projects.findIndex(x => x.id === id);
			if (ind === -1) {
				this.router.navigate(['/portfolio']);
			}
			else {
				this.selectedProject = new Project().fromInterface(this.projects[ind]);
			}
		});
	}

	previousPhoto(): void {
		if (this.selectedPhoto === 1) {
			return;
		}
		this.selectedPhoto--;
	}

	nextPhoto(): void {
		if (this.selectedPhoto === this.selectedProject.photos) {
			return;
		}
		this.selectedPhoto++;
	}
}