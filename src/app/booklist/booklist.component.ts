import { Router } from '@angular/router';
import { FetchBooksService } from './../fetch-books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/assets/classes_interfaces/Book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books!:Book[];
  errorMsg!:any;

  constructor(private fetchBookService:FetchBooksService,private router:Router) { }

  ngOnInit(): void {
    this.fetchBookService.getBookData().subscribe(data=> this.books = data,error=>this.errorMsg=error)
    this.fetchBookService.getAllBooks();
  }

  bookDetails(book:any){
    this.router.navigate(['/bookdetails/',book.id]);
  }
}
