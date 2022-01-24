import { Component, OnInit } from '@angular/core';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PORTFOLIO } from 'src/app/projects';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	portfolio: ProjectInfoInterface[] = [];

	constructor() {}
	ngOnInit(): void {
		this.portfolio = PORTFOLIO;
	}
}
