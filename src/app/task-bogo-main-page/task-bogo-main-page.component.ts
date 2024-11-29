import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-bogo-main-page',
  imports: [CommonModule],
  templateUrl: './task-bogo-main-page.component.html',
  styleUrl: './task-bogo-main-page.component.css'
})
export class TaskBogoMainPageComponent {
expandedBox: string = '';

  expandBox(box: string): void {
    this.expandedBox = this.expandedBox === box ? '' : box;
  }
}
