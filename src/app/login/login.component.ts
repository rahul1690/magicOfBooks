import { UserServiceService } from './../user-service.service';
import { FetchBooksService } from './../fetch-books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserServiceService) { }

  message:any;
  isValid:any;
  ngOnInit(): void {
    this.userService.getUsers();
  }

  isValidUser(loginForm:any) {
    let res = this.userService.findUser(loginForm);
  
    this.userService.userLogin(loginForm)
    .subscribe(
    (value) => {
     if(value){
      this.router.navigate(['dashboard']);
     }else{
      this.message = "Please enter valid Email id and Password";
      this.router.navigate(['']);
     }
     },
    (error)=>{
    alert('failed error');
     }
    );
   }

  viewBooks(){
    this.router.navigate(['booklist']);
  }

  regPage(){
    this.router.navigate(['register']);
  }

}
