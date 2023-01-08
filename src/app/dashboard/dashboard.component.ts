import { Router } from '@angular/router';
import { FetchBooksService } from './../fetch-books.service';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserServiceService,private bookService:FetchBooksService,private router:Router) { }

  isOn = true;
  message:any;
  user:any;

  ngOnInit(): void {
    this.userService.getUsers();
    this.bookService.getAllBooks();
    this.bookService.getUserById();
    this.user = this.userService.user;
  }
  onClick(comp:string){
    this.isOn = false;
    if(comp == 'booklist')
    this.router.navigate(["/dashboard/booklist"]);
    else if(comp == 'wishlist')
    this.router.navigate(["/dashboard/wishlist"]);
    else
    this.router.navigate(["/dashboard/completed"]);
  }

}
