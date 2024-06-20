import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  currentTask: Task;

  constructor(public taskService: TaskService, private route: ActivatedRoute, private routerNavigate: Router) {
    this.currentTask = { id: 0, dateCreate: '', priority: '', description: '', done: false };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const taskId = +params['id']; 
        this.currentTask = { ...this.taskService.tasks[taskId] }; 
    });
  }

  cancelEdit():void{
    this.routerNavigate.navigate(['/task-list']);
  }
}
