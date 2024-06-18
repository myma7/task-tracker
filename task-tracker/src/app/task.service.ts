import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: any[] = [
        { id: 1, dateCreate: new Date().toISOString().split('T')[0], priority: 'medium', description: 'Tidy up the room', done: false },
        { id: 2, dateCreate: new Date().toISOString().split('T')[0], priority: 'low', description: 'Sign up for a yoga class', done: false },
        { id: 3, dateCreate: new Date().toISOString().split('T')[0], priority: 'high', description: 'Read the article "10 Ways to Improve Remote Work Efficiency"', done: false },
        { id: 4, dateCreate: new Date().toISOString().split('T')[0], priority: 'medium', description: 'Do grocery shopping for the week', done: false }
    ];

    constructor() { }

    getTasks() {
        return this.tasks;
    }

    addTask(newTask: any) {
        newTask.id = this.tasks.length + 1;
        newTask.dateCreate = new Date().toISOString().split('T')[0];
        newTask.done = false;
        this.tasks.push(newTask);
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
}
