import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-demo1-why-signals',
  templateUrl: './demo1-why-signals.component.html',
  styleUrls: ['./demo1-why-signals.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class Demo1WhySignalsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
