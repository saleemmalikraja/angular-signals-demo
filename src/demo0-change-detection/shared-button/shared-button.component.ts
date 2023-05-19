import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [NgIf],
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css'],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  logChangeDetection() {
    console.log('Shared Button rendered');
    return true;
  }
}
