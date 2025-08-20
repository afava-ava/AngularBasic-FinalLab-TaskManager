import { Routes } from '@angular/router';
import { TaskDetailForm } from './features/tasks/containers/task-detail-form/task-detail-form';
import { TaskManager } from './features/tasks/containers/task-manager/task-manager';

export const routes: Routes = [
    { path: '', component: TaskManager},
    { path: 'tasks/:taskId', component: TaskDetailForm }
];
