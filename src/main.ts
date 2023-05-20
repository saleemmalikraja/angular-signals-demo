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
import { Demo0ChangeDetectionComponent } from './demo0-change-detection/demo0-change-detection.component';
import { Demo3CreateReadSignalComponent } from './demo3-create-read-signal/demo3-create-read-signal.component';
import { Demo4WriteSignalComponent } from './demo4-write-signal/demo4-write-signal.component';
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
  { path: 'changedetection', component: Demo0ChangeDetectionComponent },
  { path: 'whysignals', component: Demo1WhySignalsComponent },
  { path: 'variablevssignal', component: Demo2VariablesVsSignalsComponent },
  { path: 'createreadsignal', component: Demo3CreateReadSignalComponent },
  { path: 'writesignal', component: Demo4WriteSignalComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});
