import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../assets/classes_interfaces/RegisterClass';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user!:User;
  userObj!:User[];
  error:any;
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  url="http://localhost:3000/Users"
  isLoggin!: boolean;
  userId:any
  constructor(private http:HttpClient) { }

  postUser(user:any){
    return this.http.post(this.url,user);
  }
  
  getUserData():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUsers(){
    this.getUserData().subscribe(data=> {this.userObj =data;},error=>this.error = error);
  }

  userLogin(login:any):Observable<boolean>{
    if(this.user &&
    login.email.toLowerCase() == this.user.email.toLowerCase() &&
    login.password == this.user.password){
     const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
   
     return of(sampleJWT).pipe(
     map((token: string | undefined) => {
    if(!token){
      this.isLoggin=false;
      return false;
    }
    localStorage.setItem("access_token", token);
    const decodedUser = this.jwtHelper.decodeToken(token);
 
    this.userInfo.next(decodedUser);
    this.isLoggin=true;
    return true;
     }));
    }
    return of(false);
  }

  findUser(data:any){
    let result:any = this.userObj.find(ub=>data.email.toLowerCase() == ub.email.toLowerCase());
    if(result!=undefined){
    this.userId = result.id;
    this.user = result;
    }
  }
}
