import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { NewTaskComponent } from './new-task.component';

@Component({
  selector: 'my-app',
  directives: [TaskComponent, NewTaskComponent],
  template: `
    <div class="container jumbotron">
     <h1>To-Do List</h1>
    </div>
    <div class="container">
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
    `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
