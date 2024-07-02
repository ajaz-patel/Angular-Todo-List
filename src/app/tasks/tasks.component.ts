import { Component,EventEmitter,Input,Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask=false;
  
  
  constructor(private taskService:TaskService){
    
  }

  get selelctedusertask(){
    return this.taskService.getUserTasks(this.userId);
  }
  
  onStartAdd(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }
 

}
