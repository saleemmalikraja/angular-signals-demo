import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo1-why-signals',
  templateUrl: './demo1-why-signals.component.html',
  styleUrls: ['./demo1-why-signals.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo1WhySignalsComponent implements OnInit {
  a = 10;
  b = 20;
  c = 0;

  d = 0;

  constructor() {
    this.c = this.a + this.b;
  }

  ngOnInit() {}

  modifyA() {
    return (this.a = 11);
  }
}
