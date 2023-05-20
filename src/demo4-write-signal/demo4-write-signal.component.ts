import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface Item {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-demo4-write-signal',
  templateUrl: './demo4-write-signal.component.html',
  styleUrls: ['./demo4-write-signal.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
  ],
})
export class Demo4WriteSignalComponent implements OnInit {
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  quantity = signal(1);
  selectedItem = signal<Item>({ id: 1, name: 'Oil', price: 150 });
  offerPercentage = signal(5);
  items = signal<Item[]>([]);

  onDropdownChange(qty: number) {
    this.quantity.set(qty);
    this.offerPercentage.update((percent) => percent * this.quantity()); // mention the issue
    this.selectedItem.mutate((item) => {
      let toBeDeducted = (item.price * this.offerPercentage()) / 100;
      return (item.price = item.price * this.quantity() - toBeDeducted);
    });
    console.log('New Selected Item', this.selectedItem());
  }

  constructor() {}

  ngOnInit() {}
}
