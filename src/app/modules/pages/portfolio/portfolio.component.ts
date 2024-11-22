import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '@app/projects';
import { ProjectInfoInterface } from '@interfaces/interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [RouterLink],
})
export default class PortfolioComponent {
  portfolio: ProjectInfoInterface[] = PORTFOLIO;
}
