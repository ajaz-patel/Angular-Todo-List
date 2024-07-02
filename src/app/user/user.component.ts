import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
const randomgen=Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  // @Input({required:true})id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;

  @Output() select=new EventEmitter();
 
  get imagepath(){
    return "assests/users/"+ this.user.avatar;
  }
    
    onSelectuser(){
        this.select.emit(this.user.id);
    }
   
}
