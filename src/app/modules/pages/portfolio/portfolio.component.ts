import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PORTFOLIO } from 'src/app/projects';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [CommonModule, RouterModule],
})
export default class PortfolioComponent implements OnInit {
  portfolio: ProjectInfoInterface[] = [];

  constructor() {}
  ngOnInit(): void {
    this.portfolio = PORTFOLIO;
  }
}
