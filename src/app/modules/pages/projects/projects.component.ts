import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@app/projects';
import { ProjectInfoInterface } from '@interfaces/interfaces';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RouterLink],
})
export default class ProjectsComponent {
  projects: ProjectInfoInterface[] = PROJECTS;
}
