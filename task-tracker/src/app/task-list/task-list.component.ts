import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {
    this.tasks=[];
   }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(newTask:any){
    this.tasks.push({
      dateCreate: new Date(),
      priority: newTask.priority,
      description: newTask.description
    })
  }

}
