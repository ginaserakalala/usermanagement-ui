import { Component } from '@angular/core';
import {User} from "../user";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../user-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  user: User;

  constructor(private  router:Router,private  activateRoute: ActivatedRoute,private userService: UserService) {
    this.user = new User();
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result =>{
      this.goToUserList();
    })
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }
}
