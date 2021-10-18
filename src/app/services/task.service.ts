import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TasksData } from '../seed-tasks'
import { Task } from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TasksData)
    return tasks
  }
}
