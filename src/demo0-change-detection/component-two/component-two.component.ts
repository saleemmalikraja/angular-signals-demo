import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedButtonComponent } from '../shared-button/shared-button.component';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
  imports: [NgIf, SharedButtonComponent],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwoComponent {
  public count = 0;

  increment() {
    this.count++;
  }

  logChangeDetection() {
    console.log('ComponentTwo rendered');
    return true;
  }
}
