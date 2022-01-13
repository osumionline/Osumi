import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PAGES, COMPONENTS, PIPES, SERVICES } from './app.common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		...PAGES,
		...COMPONENTS,
		...PIPES
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		...SERVICES
	],
	bootstrap: [AppComponent]
})
export class AppModule {}