import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-bogo-main-page',
  imports: [CommonModule],
  templateUrl: './task-bogo-main-page.component.html',
  styleUrl: './task-bogo-main-page.component.css'
})
export class TaskBogoMainPageComponent {

  units = [
    { id: 'upper', label: '1 Unit', quantity: 1, discount: 10, price: 24.0 },
    { id: 'middle', label: '2 Unit', quantity: 2, discount: 20, price: 24.0 },
    { id: 'lower', label: '3 Unit', quantity: 3, discount: 30, price: 24.0 },
  ];

  
  expandedBox: string = '';

  expandBox(id: string): void {
    this.expandedBox = this.expandedBox === id ? '' : id;
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount) / 100;
  }

  calculateTotalPrice(): number {
    const selectedUnit = this.units.find(unit => unit.id === this.expandedBox);
    if (selectedUnit) {
      const discountedPrice = this.calculateDiscountedPrice(selectedUnit.price, selectedUnit.discount);
      return discountedPrice * selectedUnit.quantity;
    }
    return 0;
  }

}
