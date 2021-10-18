import { Component, OnInit, Input, Output, ɵɵsetComponentScope } from '@angular/core';
import { Task } from '../../Task'
import {TaskService} from'../../services/task.service';
import { TasksData } from 'src/app/seed-tasks';
// import { TasksData } from 'src/app/seed-tasks';

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

  toggleReminderTask(task: Task): void {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  postTask(task: Task) {
    this.taskService
    .postTask(task)
    .subscribe((task) => this.tasks.push(task))
  }
}
