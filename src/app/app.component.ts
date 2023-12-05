import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {}
