import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../model/user.model';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // getUsersUrl:string = api.baseUrl+api.routes.getUsers.endpoints;

  constructor(private _http:HttpClient) { }
  getUsers():Observable<NewUser[]>{
    return this._http.get<NewUser[]>(`${api.baseUrl+api.routes.getUsers.endpoints}`);
  }
}
