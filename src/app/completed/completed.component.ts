import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/assets/classes_interfaces/Book';
import { FetchBooksService } from '../fetch-books.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  books!:Book[];
  message:any;
  isEmpty:any;
  constructor(private router:Router,private fetchBooks:FetchBooksService) { }

  ngOnInit(): void {
    this.fetchBooks.getCompletedBooks().subscribe(
      data=>{
      if(data != undefined){
        this.books = data;
      }  
      else{
        this.message="You have not completed any books!";
      }
  })
  }

  bookDetails(book:any){
    this.router.navigate(['/bookdetails/',book.id]);
  }

}
