import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewUser, UserDetails } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: UserDetails[] = [];
  userForm: NewUser = { name: '', mobile: '' }
  updateId:string = '';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe((res: any) => {
      try {
        // console.log(res);
        this.userList = res
      } catch (err) {
        console.log("Error:-", err);

      }
    });
  }

  addUser(f:any) {
    //logic for add 
    if(this.updateId === ''){
      this._userService.addUser(this.userForm).subscribe((res:any)=>{
        try {
          // console.log(res);
          this.getUsers()  
        } catch (err) {
          console.log("Error:-", err);
  
        }      
      });
    }
    //logic for update
    if(this.updateId !== undefined && this.updateId !== null && this.updateId !== ''){
      let request:any ={...this.userForm,id:this.updateId};
      this.updateId = '';
      this._userService.updateUser(request).subscribe((res:any)=>{
        try {
          // console.log(res);
          this.getUsers()  
        } catch (err) {
          console.log("Error:-", err);
  
        }   
      })
    }
    f.resetForm();
  }
  updateUser(user:UserDetails){
    this.userForm.name = user.name;
    this.userForm.mobile = user.mobile;
    this.updateId = user.id;    
  }

}
