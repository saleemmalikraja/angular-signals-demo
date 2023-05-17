import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo1-why-signals',
  templateUrl: './demo1-why-signals.component.html',
  styleUrls: ['./demo1-why-signals.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class Demo1WhySignalsComponent implements OnInit {
  a = 10;
  b = 20;
  c = 0;

  d = 0;
  constructor() {}

  get reactToChanges1() {
    return this.a + this.b;
  }
  ngOnInit() {}

  getC() {
    this.c = this.a + this.b;
    return this.c;
  }

  modifyA() {
    this.a = 11;
    return this.a;
  }
}
