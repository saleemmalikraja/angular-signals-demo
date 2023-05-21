import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

export interface Item {
  id: number;
  name: string;
  price: number;
  original: number;
}

@Component({
  selector: 'app-demo5-computed-effect',
  templateUrl: './demo5-computed-effect.component.html',
  styleUrls: ['./demo5-computed-effect.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
  ],
})
export class Demo5ComputedEffectComponent {
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  quantity = signal(1);
  selectedItem = signal<Item>({
    id: 1,
    name: 'Oil',
    price: 150,
    original: 150,
  });

  offerPercentage = computed(() => {
    // Calculate the percentage based on the quantity
    return this.quantity() * 5;
  });
  // offerPercentage = signal(5);
  items = signal<Item[]>([]);

  onDropdownChange(qty: number) {
    this.quantity.set(qty);
    this.selectedItem.mutate((item) => {
      let toBeDeducted: any =
        (item.original * this.quantity() * this.offerPercentage()) / 100;
      return (item.price = item.original * this.quantity() - toBeDeducted);
    });
    console.log('New Selected Item', this.selectedItem());
  }
}
