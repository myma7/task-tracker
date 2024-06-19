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
  titlePage = "Welcome in Task Tracker";
  tasks: any[] = [];
  filteredTasks: any[] = [];
  searchQuery: string = '';
  paginatedTasks: any[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 0;
  totalPages: number = 0;
  errorMessage: string = '';

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
    this.filterTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  filterTasks(): void {
    this.filteredTasks = this.tasks.filter(task => 
      task.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.updatePagination();
  }

  onTaskAdded(newTask: any): void {
    if (this.tasks.some(task => task.description.toLowerCase() === newTask.description.toLowerCase())) {
      this.errorMessage = "You cannot add the same element!";
    } else {
      this.taskService.addTask(newTask);
      this.loadTasks();
      this.errorMessage = '';
    }
  }

  markAsDone(taskId: number): void {
    this.taskService.markTaskAsDone(taskId);
    this.loadTasks();
  }

  revertDone(taskId: number): void {
    this.taskService.revertTaskDone(taskId);
    this.loadTasks();
  }

  remove(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        data: { description: task.description }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.taskService.removeTask(taskId);
          this.loadTasks();
        }
      });
    }
  }

  sortTasksAsc(): void {
    this.taskService.sortTasksByDescriptionByAscending();
    this.loadTasks();
  }

  sortTasksDesc(): void {
    this.taskService.sortTasksByDescriptionByDescending();
    this.loadTasks();
  }

  removeDuplicates(): void {
    const uniqueDescriptions = new Set<string>();
    const uniqueTasks: any[] = [];
   
    this.tasks.forEach(task => {
      const description = task.description.toLowerCase();
      if (!uniqueDescriptions.has(description)) {
        uniqueDescriptions.add(description);
        uniqueTasks.push(task);
      } else {
        this.errorMessage = "You cannot add the same element!";
      }
    });

    this.tasks = uniqueTasks;
    this.filterTasks(); 
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredTasks.length / this.itemsPerPage);
    this.paginatedTasks = this.filteredTasks.slice(
        this.currentPage * this.itemsPerPage,
        (this.currentPage + 1) * this.itemsPerPage
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
        this.currentPage--;
        this.updatePagination();
    }
  }
}
