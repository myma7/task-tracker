import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  newTask: any = {
    description: '',
    priority: ''
};

constructor(private taskService: TaskService, private router: Router) {}

onTaskAdded() {
  this.taskService.addTask(this.newTask);
  this.newTask = {
      description: '',
      priority: ''
    };
  }
}
