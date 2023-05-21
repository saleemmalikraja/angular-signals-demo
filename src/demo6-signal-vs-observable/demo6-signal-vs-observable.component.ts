import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import { BehaviorSubject, combineLatest, map, tap, debounceTime } from 'rxjs';
@Component({
  selector: 'app-demo6-signal-vs-observable',
  templateUrl: './demo6-signal-vs-observable.component.html',
  styleUrls: ['./demo6-signal-vs-observable.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatBadgeModule],
})
export class Demo6SignalVsObservableComponent {
  public firstName = new BehaviorSubject('Peter');
  public lastName = new BehaviorSubject('Parker');
  public fullNameCounter = 0;

  public fullName$ = combineLatest([this.firstName, this.lastName]).pipe(
    tap(() => {
      this.fullNameCounter++;
    }),
    map(([firstName, lastName]) => `${firstName} ${lastName}`)
  );

  public changeName() {
    this.firstName.next('Spider');
    this.lastName.next('Man');
  }

  /* Debounce Implementation */
  public firstNameDebounce = new BehaviorSubject('Peter');
  public lastNameDebounce = new BehaviorSubject('Parker');
  public fullNameCounterDebounce = 0;

  public fullNameDebounce$ = combineLatest([
    this.firstNameDebounce,
    this.lastNameDebounce,
  ]).pipe(
    debounceTime(0),
    tap(() => {
      this.fullNameCounterDebounce++;
    }),
    map(
      ([firstNameDebounce, lastNameDebounce]) =>
        `${firstNameDebounce} ${lastNameDebounce}`
    )
  );

  public changeNameDebounce() {
    this.firstNameDebounce.next('Debounced Spider');
    this.lastNameDebounce.next('Man');
  }

  /* Signal Implementation */
  firstNameSignal = signal('Peter');
  lastNameSignal = signal('Parker');

  signalCounter = 0;

  fullNameSignal = computed(() => {
    this.signalCounter++;
    console.log('signal name change');
    return `${this.firstNameSignal()} ${this.lastNameSignal()}`;
  });

  changeNameSignal() {
    this.firstNameSignal.set('Signal Spider');
    this.lastNameSignal.set('Man');
  }
}
