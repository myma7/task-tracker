import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    {
      id: 1,
      creationDate: new Date(),
      priority: 'medium',
      description: 'Tidy up the room',
      done: false,
    },
    {
      id: 2,
      creationDate: new Date(),
      priority: 'low',
      description: 'Sign up for a yoga class',
      done: false,
    },
    {
      id: 3,
      creationDate: new Date(),
      priority: 'high',
      description:
        'Read the article "10 Ways to Improve Remote Work Efficiency"',
      done: false,
    },
    {
      id: 4,
      creationDate: new Date(),
      priority: 'medium',
      description: 'Do grocery shopping for the week',
      done: false,
    },
    {
      id: 5,
      creationDate: new Date(),
      priority: 'low',
      description: 'Do a math homework',
      done: false,
    },
    {
      id: 6,
      creationDate: new Date(),
      priority: 'low',
      description: 'Do a english homework',
      done: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task) {
    newTask.id = this.tasks.length + 1;
    newTask.creationDate = new Date();
    newTask.done = false;
    this.tasks.push(newTask);
  }

  markTaskAsDone(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.done = true;
    }
  }

  revertTaskDone(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.done = false;
    }
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((item) => item.id !== taskId);
  }
}
