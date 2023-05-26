import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@Component({
  selector: 'app-demo0-change-detection',
  templateUrl: './demo0-change-detection.component.html',
  styleUrls: ['./demo0-change-detection.component.css'],
  imports: [NgIf, ComponentOneComponent, ComponentTwoComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo0ChangeDetectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logChangeDetection() {
    console.log('Parent rendered');
    return true;
  }
}
