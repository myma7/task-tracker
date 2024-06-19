

import { Injectable } from "@angular/core";
import { Task } from "./models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    public tasks: Task[] = [
        { id: 1, dateCreate: new Date().toISOString().split('T')[0], priority: 'medium', description: 'Tidy up the room', done: false },
        { id: 2, dateCreate: new Date().toISOString().split('T')[0], priority: 'low', description: 'Sign up for a yoga class', done: false },
        { id: 3, dateCreate: new Date().toISOString().split('T')[0], priority: 'high', description: 'Read the article "10 Ways to Improve Remote Work Efficiency"', done: false },
        { id: 4, dateCreate: new Date().toISOString().split('T')[0], priority: 'medium', description: 'Do grocery shopping for the week', done: false },
        { id: 5, dateCreate: new Date().toISOString().split('T')[0], priority: 'low', description: 'Do a math homework', done: false },
        { id: 6, dateCreate: new Date().toISOString().split('T')[0], priority: 'low', description: 'Do a english homework', done: false }
    ];

    errorMessage: string = '';

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(newTask: Task) {
        if (this.isTaskValid(newTask)) {
            newTask.id = this.tasks.length + 1;
            newTask.dateCreate = new Date().toISOString().split('T')[0];
            newTask.done = false;
            this.tasks.push(newTask);
            this.errorMessage = '';
        } else {
            this.errorMessage = 'Cannot add empty task or task with missing priority.';
        }
    }

    markTaskAsDone(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.done = true;
        }
    }

    revertTaskDone(taskId: number): void {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.done = false;
        }
    }

    removeTask(taskId: number): void {
        this.tasks = this.tasks.filter(item => item.id !== taskId)
    }


    sortTasksByDescriptionByAscending(): void {
        this.tasks.sort((a, b) => a.description.localeCompare(b.description));
    }
    sortTasksByDescriptionByDescending(): void {
        this.tasks.sort((a, b) => b.description.localeCompare(a.description));
    }
 
    private isTaskValid(task: Task): boolean {
        return !!task.description && task.description.trim().length > 0 && !!task.priority;
    } 
}
