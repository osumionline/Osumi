import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { PORTFOLIO }  from 'src/app/projects';

@Component({
	selector: 'app-portfolio-detail',
	templateUrl: './portfolio-detail.component.html',
	styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
	selectedProject: Project = new Project();
	selectedPhoto: number = 1;
	openPhoto: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params.id;
			const ind: number = PORTFOLIO.findIndex(x => x.id === id);
			if (ind === -1) {
				this.router.navigate(['/portfolio']);
			}
			else {
				this.selectedProject = new Project().fromInterface(PORTFOLIO[ind]);
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

	showPhoto(): void {
		this.openPhoto = !this.openPhoto;
	}
}
