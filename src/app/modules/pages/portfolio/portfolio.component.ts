import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PORTFOLIO } from 'src/app/projects';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [RouterModule],
})
export default class PortfolioComponent {
  portfolio: ProjectInfoInterface[] = PORTFOLIO;
}
