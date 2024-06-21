import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCancelEditDialogComponent } from '../confirm-cancel-edit-dialog/confirm-cancel-edit-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  currentTask: Task;

  constructor(
    public taskService: TaskService,
    private route: ActivatedRoute,
    private routerNavigate: Router,
    public dialog: MatDialog,
    private datePipe: DatePipe // Inject DatePipe here
  ) {
    this.currentTask = {
      id: 0,
      endDate: new Date(),
      priority: '',
      description: '',
      done: false,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = +params['id'];
      const task = this.taskService.getTaskById(taskId);
      if (task) {
        this.currentTask = { ...task };
      }
    });
  }

  cancelEdit(): void {
    const dialogRef = this.dialog.open(ConfirmCancelEditDialogComponent, {
      width: '600px',
      data: { description: this.currentTask.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.routerNavigate.navigate(['/task-list']);
      }
    });
  }

  saveTask(): void {
    if (this.currentTask) {
      const formattedDate = this.datePipe.transform(this.currentTask.endDate, 'yyyy-MM-dd');
      if (formattedDate) {
        this.currentTask.endDate = new Date(formattedDate); // Update the endDate with formatted date
      }
      this.taskService.updateTask(this.currentTask);
      this.routerNavigate.navigate(['/task-list']);
    }
  }
}