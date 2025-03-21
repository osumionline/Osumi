import {
  Component,
  InputSignal,
  OnInit,
  WritableSignal,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { PROJECTS } from '@app/projects';
import { ProjectInfoInterface } from '@interfaces/interfaces';
import Project from '@model/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  imports: [],
})
export default class ProjectDetailComponent implements OnInit {
  private router: Router = inject(Router);

  id: InputSignal<string> = input.required();
  selectedProject: WritableSignal<Project> = signal<Project>(new Project());
  selectedPhoto: WritableSignal<number> = signal<number>(1);
  openPhoto: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    const id: string = this.id();
    const ind: number = PROJECTS.findIndex(
      (x: ProjectInfoInterface): boolean => x.id === id
    );
    if (ind === -1) {
      this.router.navigate(['/projects']);
    } else {
      this.selectedProject.set(new Project().fromInterface(PROJECTS[ind]));
    }
  }

  previousPhoto(): void {
    if (this.selectedPhoto() === 1) {
      return;
    }
    this.selectedPhoto.update((value: number): number => {
      return value - 1;
    });
  }

  nextPhoto(): void {
    if (this.selectedPhoto() === this.selectedProject().photos) {
      return;
    }
    this.selectedPhoto.update((value: number): number => {
      return value + 1;
    });
  }

  showPhoto(): void {
    this.openPhoto.update((value: boolean): boolean => !value);
  }
}
