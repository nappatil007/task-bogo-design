import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskBogoMainPageComponent } from './task-bogo-main-page/task-bogo-main-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskBogoMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-bogo-design';
}
