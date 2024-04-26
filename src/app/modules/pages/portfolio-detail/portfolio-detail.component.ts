import { NgClass } from '@angular/common';
import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectInfoInterface } from '@interfaces/interfaces';
import Project from '@model/project.model';
import { PORTFOLIO } from 'src/app/projects';

@Component({
  standalone: true,
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
  imports: [NgClass],
})
export default class PortfolioDetailComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  selectedProject: WritableSignal<Project> = signal<Project>(new Project());
  selectedPhoto: WritableSignal<number> = signal<number>(1);
  openPhoto: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      const id: string = params['id'];
      const ind: number = PORTFOLIO.findIndex(
        (x: ProjectInfoInterface): boolean => x.id === id
      );
      if (ind === -1) {
        this.router.navigate(['/portfolio']);
      } else {
        this.selectedProject.set(new Project().fromInterface(PORTFOLIO[ind]));
      }
    });
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
