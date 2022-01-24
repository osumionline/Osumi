import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { PROJECTS } from 'src/app/projects';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
	selectedProject: Project = new Project();
	selectedPhoto: number = 1;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params.id;
			const ind: number = PROJECTS.findIndex(x => x.id === id);
			if (ind === -1) {
				this.router.navigate(['/projects']);
			}
			else {
				this.selectedProject = new Project().fromInterface(PROJECTS[ind]);
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
