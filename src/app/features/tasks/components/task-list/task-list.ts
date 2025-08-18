import { Component } from '@angular/core';
import { MOCK_TASKS } from '../../models/mock-task';
import { Task } from '../../models/task';
import { TaskDetailComponent } from '../task-detail/task-detail';

@Component({
  selector: 'app-task-list',
  imports: [TaskDetailComponent],
  templateUrl: './task-list.html'
})
export class TaskListComponent {
  tasks : Task[] = MOCK_TASKS
}
