import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManager } from "./features/tasks/containers/task-manager/task-manager";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskManager, TaskManager],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularBasic-FinalLab-TaskManager');
}
