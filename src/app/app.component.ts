import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import {  TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from "./tasks/task/task.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-angularapp';
  users=DUMMY_USERS;
  userId?:string;

  get selecteduser(){
    return this.users.find((u)=>u.id===this.userId)!;
  }

  onSelectuser(userId:string){
   this.userId=userId;
}

}
