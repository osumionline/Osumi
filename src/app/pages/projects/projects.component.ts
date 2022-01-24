import { Component, OnInit } from '@angular/core';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PROJECTS } from 'src/app/projects';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projects: ProjectInfoInterface[] = [];

	constructor() {}
	ngOnInit(): void {
		this.projects = PROJECTS;
	}
}
