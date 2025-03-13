import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  users = DUMMY_USERS;
  selectedUser: { id: string; name: string; avatar: string} | undefined;

  onSelecetUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    this.selectedUser = user;
  }

}