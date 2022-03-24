import { Component, OnInit } from '@angular/core';
import { NewUser } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList:NewUser[] =[{name:"Sandeep" , mobile:9559123391}];

  constructor() { }

  ngOnInit(): void {
  }

}
