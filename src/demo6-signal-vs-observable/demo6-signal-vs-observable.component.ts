import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BehaviorSubject, combineLatest, map, tap, debounceTime } from 'rxjs';
@Component({
  selector: 'app-demo6-signal-vs-observable',
  templateUrl: './demo6-signal-vs-observable.component.html',
  styleUrls: ['./demo6-signal-vs-observable.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatBadgeModule],
})
export class Demo6SignalVsObservableComponent implements OnInit {
  public firstName = new BehaviorSubject('Peter');
  public lastName = new BehaviorSubject('Parker');
  public fullNameCounter = 0;

  public firstNameDebounce = new BehaviorSubject('Peter');
  public lastNameDebounce = new BehaviorSubject('Parker');

  public fullNameCounterDebounce = 0;
  constructor() {}

  ngOnInit() {}

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
}
