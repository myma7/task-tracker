import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent  {
  newTask: Task = {
    id: 0,
    creationDate: new Date(),
    priority: '',
    description: '',
    done: false
  };

  errorMessage: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  onTaskAdded() {
    if (this.newTask.description.trim() === '' || this.newTask.priority.trim() === '') {
      this.errorMessage = 'Cannot add empty task or task with missing priority!';
      return; 
    }
    
    if (this.taskService.tasks.some(task => task.description.toLowerCase() === this.newTask.description.toLowerCase())) {
      this.errorMessage = 'You cannot add the same element! Please correct it!';
      return;
    }

    this.taskService.addTask(this.newTask);
    this.newTask = {
      id: 0,
      creationDate: new Date(),
      priority: '',
      description: '',
      done: false
    };
    this.errorMessage = ''; 
    this.router.navigate(['/task-list']);
  }
}
