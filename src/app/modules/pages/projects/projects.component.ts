import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';
import { PROJECTS } from 'src/app/projects';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, RouterModule],
})
export default class ProjectsComponent implements OnInit {
  projects: ProjectInfoInterface[] = [];

  ngOnInit(): void {
    this.projects = PROJECTS;
  }
}
