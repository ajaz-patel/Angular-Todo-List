import { Component,EventEmitter,Input,Output } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
   
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
