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
import { ProjectInfoInterface } from '@interfaces/interfaces';
import Project from '@model/project.model';
import { PORTFOLIO } from 'src/app/projects';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  imports: [],
})
export default class PortfolioDetailComponent implements OnInit {
  private router: Router = inject(Router);

  id: InputSignal<string> = input.required();
  selectedProject: WritableSignal<Project> = signal<Project>(new Project());
  selectedPhoto: WritableSignal<number> = signal<number>(1);
  openPhoto: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    const ind: number = PORTFOLIO.findIndex(
      (x: ProjectInfoInterface): boolean => x.id === this.id()
    );
    if (ind === -1) {
      this.router.navigate(['/portfolio']);
    } else {
      this.selectedProject.set(new Project().fromInterface(PORTFOLIO[ind]));
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
