import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task-detail',
  imports: [DatePipe, NgClass],
  templateUrl: './task-detail.html'
})
export class TaskDetailComponent {
  @Input() task!: Task;
}
