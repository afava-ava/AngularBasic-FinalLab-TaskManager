import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../models/task';



@Component({
  selector: 'app-task-detail',
  imports: [DatePipe, NgClass, RouterLink],
  templateUrl: './task-detail.html'
})
export class TaskDetailComponent {
  @Input() task!: Task;
}
