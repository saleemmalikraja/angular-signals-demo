import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo2-variables-vs-signals',
  templateUrl: './demo2-variables-vs-signals.component.html',
  styleUrls: ['./demo2-variables-vs-signals.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class Demo2VariablesVsSignalsComponent implements OnInit {
  a = 10;
  b = 20;
  c = 0;

  d = 0;

  x = signal(10);
  y = signal(20);

  z = computed(() => {
    console.log('Computed called');
    return this.x() + this.y();
  });

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {}

  getC() {
    this.c = this.a + this.b;
    return this.c;
  }

  get reactToChanges1() {
    return this.a + this.b;
  }

  modifyA() {
    this.a = 11;
    return this.a;
  }

  signalA() {
    return this.x.set(11); // replaces with new value
  }
}
