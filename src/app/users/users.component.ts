import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    this.users = this.registerService.getUsersList();
  }

  ngOnInit() {
  }

  removeUser(user) {
    if(confirm(`This action will remove a user with this email: ${user.email}\nAre you sure?`)) {
      this.registerService.removeUser(user);
    }
  }

  logOut() {
    this.registerService.setStatus(false);
    this.router.navigate(['login']);
  }

}
