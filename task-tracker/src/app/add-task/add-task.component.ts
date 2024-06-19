import { Component } from '@angular/core';
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

  constructor(public taskService: TaskService, private router: Router) {}

  onTaskAdded() {
    if (this.newTask.description.trim() === '' || this.newTask.priority.trim() === '') {
      this.taskService.errorMessage = 'Cannot add empty task or task with missing priority!';
      this.router.navigate(['/add-list']);
      return; 
    }
    
    if (this.taskService.tasks.some(task => task.description.toLowerCase() === this.newTask.description.toLowerCase())) {
      this.taskService.errorMessage = 'You cannot add the same element! Bro, please correct it!';
      this.router.navigate(['/add-list']);
      return;
    }

    this.taskService.addTask(this.newTask);
    this.newTask = {
      description: '',
      priority: ''
    };
    this.taskService.errorMessage = ''; 
    this.router.navigate(['/task-list']);
  }

  
}
