import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-bogo-main-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-bogo-main-page.component.html',
  styleUrl: './task-bogo-main-page.component.css'
})
export class TaskBogoMainPageComponent {

  units = [
    { id: 'upper', label: '1 Unit', quantity: 1, discount: 10, price: 24.0, selectedSizes: [''], selectedColors: [''] },
    { id: 'middle', label: '2 Units', quantity: 2, discount: 20, price: 24.0, selectedSizes: ['', ''], selectedColors: ['', ''] },
    { id: 'lower', label: '3 Units', quantity: 3, discount: 30, price: 24.0, selectedSizes: ['', '', ''], selectedColors: ['', '', ''] },
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


  onAddToCart(): void {
    if (!this.expandedBox) {
      this.showToaster('Please select any units.');
      return;
    }

    const selectedUnit = this.units.find((unit) => unit.id === this.expandedBox);
    if (selectedUnit) {

      const incompleteSelection = selectedUnit.selectedSizes.some(size => size === '') ||
        selectedUnit.selectedColors.some(color => color === '');

      if (incompleteSelection) {
        this.showToaster('Please fill the size and color options.');
        return;
      }

      console.log('Selected Sizes:', selectedUnit.selectedSizes);
      console.log('Selected Colors:', selectedUnit.selectedColors);

      this.showToaster('Items added to cart successfully!');

      selectedUnit.selectedSizes = [];
      selectedUnit.selectedColors = [];
    }

    this.expandedBox = '';
  }

  showToaster(message: string): void {
    const toaster = document.createElement('div');
    toaster.className = 'toaster';
    toaster.innerText = message;
    document.body.appendChild(toaster);

    setTimeout(() => {
      toaster.remove();
    }, 3000);
  }

}
