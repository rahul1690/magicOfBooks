import { Book } from 'src/assets/classes_interfaces/Book';
import { FetchBooksService } from './../fetch-books.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books!:Book[];
  message:any;
  errorMsg: any;
  isEmpty:any;
  successMsg:any;
  constructor(private router:Router,private fetchBooks:FetchBooksService) { }

  ngOnInit(): void {
    this.fetchBooks.getWishlistBooks().subscribe(data=>{
      if(data != undefined){
      this.books = data;
      }
      else{
      this.message="your wishlist is empty!";
      }
    });
  }

  bookDetails(book:any){
    this.router.navigate(['/bookdetails/',book.id]);
  }

}
