import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewUser, UserDetails } from '../model/user.model';
import { api } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // getUsersUrl:string = api.baseUrl+api.routes.getUsers.endpoints;

  constructor(private _http:HttpClient) { }
  getUsers():Observable<UserDetails[]>{
    return this._http.get<UserDetails[]>(`${api.baseUrl+api.routes.getUsers.endpoints}`);
  }
  addUser(payload:NewUser):Observable<NewUser[]>{
    return this._http.post<NewUser[]>(`${api.baseUrl+api.routes.addUser.endpoints}`,payload);
  }
  updateUser(payload:UserDetails):Observable<UserDetails[]>{
    return this._http.put<UserDetails[]>(`${api.baseUrl+api.routes.updateUser.endpoints}`,payload);
  }
}
