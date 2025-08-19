import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskDetailComponent } from '../task-detail/task-detail';

@Component({
  selector: 'app-task-list',
  imports: [TaskDetailComponent],
  templateUrl: './task-list.html'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
}
