import { ProjectInfoInterface } from 'src/app/interfaces/interfaces';

export class Project {
  constructor(
    public id: string = '',
    public title: string = '',
    public short: string = '',
    public description: string = '',
    public photos: number = 0
  ) {}

  get numPhotos(): number[] {
    return Array.from({ length: this.photos }, (_, i: number): number => i + 1);
  }

  fromInterface(p: ProjectInfoInterface): Project {
    this.id = p.id;
    this.title = p.title;
    this.short = p.short;
    this.description = p.description;
    this.photos = p.photos;

    return this;
  }
}
