import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { MyNavComponent } from './my-nav/my-nav.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [MyNavComponent, CommonModule],
  template: `
    <app-my-nav></app-my-nav>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,  { providers: [provideRouter([]), importProvidersFrom(BrowserAnimationsModule)] });
