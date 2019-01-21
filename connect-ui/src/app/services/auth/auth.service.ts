import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  logIn(payload) {

   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + payload.payload.token
       })
    };

    return this.http.post<User>(environment.api+`login`,{username: payload.payload.username, password: payload.payload.password},httpOptions)
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (localStorage.getItem('token')) {
    if (this.isAuthenticated()) {

      return true;
    } else {
      this.router.navigateByUrl('login');
    }
  }

}
