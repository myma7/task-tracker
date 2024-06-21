import { Injectable, EventEmitter } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    {
      id: 1,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'medium',
      description: 'Tidy up the room',
      done: false,
    },
    {
      id: 2,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'low',
      description: 'Sign up for a yoga class',
      done: false,
    },
    {
      id: 3,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'high',
      description:
        'Read the article "10 Ways to Improve Remote Work Efficiency"',
      done: false,
    },
    {
      id: 4,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'medium',
      description: 'Do grocery shopping for the week',
      done: false,
    },
    {
      id: 5,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'low',
      description: 'Do a math homework',
      done: false,
    },
    {
      id: 6,
      dateCreate: new Date().toISOString().split('T')[0],
      priority: 'low',
      description: 'Do a english homework',
      done: false,
    },
  ];

  public filterText: string = '';
  public filteredTasks: Task[] = this.tasks;
  errorMessage: string = '';
  public filterPriority: string = '';
  filterChanged: EventEmitter<void> = new EventEmitter<void>();

  getTasks(): Task[] {
    return this.filteredTasks;
  }

  addTask(newTask: Task) {
    if (this.isTaskValid(newTask)) {
      newTask.id = this.tasks.length + 1;
      newTask.dateCreate = new Date().toISOString().split('T')[0];
      newTask.done = false;

      const firstDoneTaskIndex = this.tasks.findIndex((task) => task.done);

      if (firstDoneTaskIndex === -1) {
        this.tasks.push(newTask);
      } else {
        this.tasks.splice(firstDoneTaskIndex, 0, newTask);
      }

      this.applyFilter();
      this.errorMessage = '';
    } else {
      this.errorMessage =
        'Cannot add empty task or task with missing priority.';
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
  markTaskAsDone(taskId: number): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].done = true;
      const [doneTask] = this.tasks.splice(taskIndex, 1);
      this.tasks.push(doneTask);
      this.applyFilter();
    }
  }

  revertTaskDone(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.done = false;
    }
  }

  updateTask(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...updatedTask };
      this.applyFilter();
    }
  }
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((item) => item.id !== taskId);
    this.applyFilter();
  }

  sortTasksByDescriptionByAscending(): void {
    this.filteredTasks.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  sortTasksByDescriptionByDescending(): void {
    this.filteredTasks.sort((a, b) =>
      b.description.localeCompare(a.description)
    );
  }

  sortTasksByPriorityByAscending(): void {
    const priorityMap: { [key: string]: number } = {
      low: 1,
      medium: 2,
      high: 3,
    };

    this.filteredTasks.sort(
      (a, b) => priorityMap[a.priority] - priorityMap[b.priority]
    );
  }

  sortTasksByPriorityByDescending(): void {
    const priorityMap: { [key: string]: number } = {
      low: 1,
      medium: 2,
      high: 3,
    };

    this.filteredTasks.sort(
      (a, b) => priorityMap[b.priority] - priorityMap[a.priority]
    );
  }

  applyFilter(): void {
    this.filteredTasks = this.tasks.filter((task) =>
      task.priority.toLowerCase().includes(this.filterPriority.toLowerCase())
    );
    this.filterChanged.emit();
  }

  edit(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
  }
  private isTaskValid(task: Task): boolean {
    return (
      !!task.description &&
      task.description.trim().length > 0 &&
      !!task.priority
    );
  }
}
