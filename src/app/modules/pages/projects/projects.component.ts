import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PROJECTS } from 'src/app/projects';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RouterModule],
})
export default class ProjectsComponent {
  projects: ProjectInfoInterface[] = PROJECTS;
}
