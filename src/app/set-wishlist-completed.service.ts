import { Observable, of } from 'rxjs';
import { User } from './../assets/classes_interfaces/RegisterClass';
import { UserServiceService } from './user-service.service';
import { Book } from './../assets/classes_interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetWishlistCompletedService {
  url="";
  user!:User;
  wishList!:number[];
  response!:any;

  constructor(private http:HttpClient,private userService:UserServiceService) { }
  setData(url:any,data:any):Observable<any>{
    return this.http.patch(url,data);
  }

  setToWishlist(book:Book){
    this.user = this.userService.user;
    console.log(this.user);
    this.user.wishList.push(book.id);
    this.url = "http://localhost:3000/Users/"+this.userService.userId;
    console.log(this.url);
    this.setData(this.url,this.user).subscribe(data=>this.response=data);
  }
  
  setToCompleted(book:Book){
    this.user = this.userService.user;
    this.user.completed.push(book.id);
    this.url = "http://localhost:3000/Users/"+this.userService.userId;
    console.log(this.url);
    this.setData(this.url,this.user).subscribe(data=>this.response=data);
  }
}
