import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { Project } from 'src/app/model/project.model';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
	projects: ProjectInfoInterface[] = [
		{
			id: 'ofw',
			title: 'Osumi Framework',
			description: '<p>Osumi Framework es un pequeño framework orientado al modelo MVC (Modelo, Vista, Controlador) para la creación de aplicaciones web, tanto pequeñas como grandes.</p><p>La documentación del framework, con casos de uso y ejemplos, se encuentra en <a href="https://framework.osumi.es" target="_blank">Osumi Framework Docs</a>.</p><p>El repositorio con todo el código está disponible en <a href="https://github.com/igorosabel/Osumi-Framework" target="_blank">Github</a> bajo licencia MIT.</p>',
			photos: 5
		},
		{
			id: 'escaparatv',
			title: 'EscaparaTV',
			description: '<p>EscaparaTV es un sistema de gestión de contenidos publicitarios. Se trata de una pantalla que se instala en el escaparate del usuario donde mostrar productos, ofertas o todo tipo de imagenes.</p><p>Mediante un panel web, el usuario puede personalizar la apariencia, los elementos a mostrar o la duración de cada imagen.</p><p>Con el planificador se pueden mostrar distintas secuencias de productos en distintas franjas horarias.</p>',
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
				this.router.navigate(['/projects']);
			}
			else {
				this.selectedProject = new Project().fromInterface(this.projects[ind]);
				console.log(this.selectedProject.numPhotos);
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
