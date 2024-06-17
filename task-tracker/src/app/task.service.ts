import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    private tasks: any[] = [
        { id: 1, dateCreate: '', priority: 'medium', description: 'Tidy up the room'},
        { id: 2, dateCreate: '', priority: 'low', description: 'Sign up for a yoga class'},
        { id: 3, dateCreate: '', priority: 'high', description: 'Read the article "10 Ways to Improve Remote Work Efficiency"'},
        { id: 4, dateCreate: '', priority: 'medium', description: 'Do grocery shopping for the week'}
    ];
    constructor(){}


    getTasks() {
        return this.tasks;
    }

    addTask(newTask: any) {
        console.log(this.tasks)
        newTask.id = this.tasks.length + 1; 
        newTask.dateCreate = new Date();
        this.tasks.push(newTask);
        console.log(this.tasks)

    }
}