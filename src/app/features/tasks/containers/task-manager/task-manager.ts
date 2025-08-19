import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListComponent } from "../../components/task-list/task-list";
import { Task } from '../../models/task';
import { TaskApi } from '../../services/task-api';

@Component({
  selector: 'app-task-manager',
  imports: [TaskListComponent, AsyncPipe],
  template: `
    <app-task-list [tasks]="(tasks$ | async) ?? []"></app-task-list>
  `
})
export class TaskManager implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskApi: TaskApi) {}

  ngOnInit(): void {
    this.tasks$ = this.taskApi.getTasks();
  }
}
