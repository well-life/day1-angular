import { Component, OnInit } from '@angular/core';
import { UserService } from './cores/services/user.service';
import { IUser

 } from './cores/interfaces/i-user';
import { timeout } from 'rxjs';
import {
  faCheckCircle,
  faClose,
  faCross,
  faExclamationCircle,
  faPencil,
  faPlusCircle,
  faTrash,
  faUndo
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users: IUser[] = [];

  icons = {
    confirm: faExclamationCircle,
    edit: faPencil,
    remove: faTrash,
    checklist: faCheckCircle,
    cancel: faClose,
    restore: faUndo,
  };

  loading: boolean = false;

  constructor(private userService: UserService) {
    
  }

  
}
