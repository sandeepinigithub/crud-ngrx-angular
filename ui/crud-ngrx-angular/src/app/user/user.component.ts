import { Component, OnInit } from '@angular/core';
import { NewUser } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: NewUser[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((res: any) => {
      try {
        // console.log(res);
        this.userList = res
      } catch (err) {
        console.log("Error:-",err);

      }
    });
  }

}
