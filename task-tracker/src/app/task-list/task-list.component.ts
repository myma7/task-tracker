import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  titlePage= "Welcome in Task Tracker"
  tasks: any[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(newTask: any) {
    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks(); 
  }

  markAsDone(taskId: number): void {
    this.taskService.markTaskAsDone(taskId);
    this.tasks = this.taskService.getTasks(); 
  }

  revertDone(taskId: number): void {
    this.taskService.revertTaskDone(taskId);
    this.tasks = this.taskService.getTasks(); 
  }

  remove(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: { description: task.description }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.taskService.removeTask(taskId);
          this.tasks = this.taskService.getTasks(); 
        }
      });
    }
  }
}
