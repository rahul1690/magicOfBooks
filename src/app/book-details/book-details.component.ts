import { SetWishlistCompletedService } from './../set-wishlist-completed.service';
import { Book } from './../../assets/classes_interfaces/Book';
import { User } from './../../assets/classes_interfaces/RegisterClass';
import { UserServiceService } from './../user-service.service';
import { FetchBooksService } from './../fetch-books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private fetchBooksService:FetchBooksService,private userService:UserServiceService,private setWishlistCompletedService:SetWishlistCompletedService) { }
  book!:Book;

  id!:any;
  errorMsg!:any;
  user!:any;
  loggedIn:boolean=false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=>{
      this.id = params.get('id');
    },error=> this.errorMsg = error);
    if(this.book == undefined){
      this.book = this.fetchBooksService.getBookById(this.id);
    }
    this.user = this.userService.user;
    if(this.user == undefined) this.loggedIn = false;
    else this.loggedIn = true;
  }

  addWishlist(book:any){
    this.setWishlistCompletedService.setToWishlist(this.book);
  }
  

 addCompleted(book:any){
  this.setWishlistCompletedService.setToCompleted(this.book);
  }

}
