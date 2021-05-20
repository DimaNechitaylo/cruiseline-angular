import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, throwError  } from 'rxjs';
import { UserDTO } from '../../dto/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
  private localStorage: LocalStorageService) { }

  getCurrentUser(): Observable<UserDTO>{
    return this.http.get<UserDTO>("http://localhost:8080/user/getByUsername?username=" + this.localStorage.retrieve("username"));
  }

}
