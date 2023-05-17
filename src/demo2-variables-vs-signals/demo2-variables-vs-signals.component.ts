import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2-variables-vs-signals',
  templateUrl: './demo2-variables-vs-signals.component.html',
  styleUrls: ['./demo2-variables-vs-signals.component.css'],
})
export class Demo2VariablesVsSignalsComponent implements OnInit {
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
