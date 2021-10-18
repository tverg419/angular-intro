import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../../Task'
import {TaskService} from'../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = []; 

  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService
    .getTasks()
    .subscribe((data) => {
      this.tasks = data;
    })
  }
  deleteTask(task: Task): void {
    this.taskService
    .deleteTask(task)
    .subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

}
