import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { MyNavComponent } from './my-nav/my-nav.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1WhySignalsComponent } from './demo1-why-signals/demo1-why-signals.component';
import { Demo2VariablesVsSignalsComponent } from './demo2-variables-vs-signals/demo2-variables-vs-signals.component';
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
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'whysignals', component: Demo1WhySignalsComponent },
  { path: 'variablevssignal', component: Demo2VariablesVsSignalsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});
