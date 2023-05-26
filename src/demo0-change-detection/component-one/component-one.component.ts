import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logChangeDetection() {
    console.log('ComponentOne rendered');
    return true;
  }
}
