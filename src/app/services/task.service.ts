import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TasksData } from '../seed-tasks'
import { Task } from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(deleteUrl)
  }
}
