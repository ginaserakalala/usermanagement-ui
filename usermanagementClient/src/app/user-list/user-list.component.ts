import {Component, OnInit} from '@angular/core';
import {UserService} from "../user-service.service";
import {User} from "../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  private users: User[];
  constructor(private userService: UserService) {
  }
  ngOnInit(){
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
