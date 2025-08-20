import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { TaskApi } from '../../services/task-api';

@Component({
  selector: 'app-task-detail-form',
  imports: [DatePipe, RouterLink],
  templateUrl: './task-detail-form.html'
})
export class TaskDetailForm {
  private route = inject(ActivatedRoute);
  private taskApi = inject(TaskApi);

  taskSignal = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('taskId'));
        return this.taskApi.getTaskById(id);
      })
    ),
  )
}
