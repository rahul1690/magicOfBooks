import { UserServiceService } from './user-service.service';
import { Book } from './../assets/classes_interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/assets/classes_interfaces/RegisterClass';

@Injectable({
  providedIn: 'root',
})
export class FetchBooksService {
  
  books!: any;
  booksArray!: Book[];
  book!: any;
  errorMsg!: any;
  wishListBooks!:Book[]
  completedBooks!:Book[];
  user!:User;

  constructor(private http: HttpClient,private userService:UserServiceService) {}
  url = 'http://localhost:3000/Books';

  getBookData(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getAllBooks() {
    this.getBookData().subscribe(
      (data) => (this.booksArray = data),
      (error) => (this.errorMsg = error)
    );
  }
  // you get observable you need to subscribe for that observable use a method which subscribe then fetch data
  getBookById(id: any) {
    if (this.booksArray != undefined) {
      this.book = this.booksArray.find((b) => b.id == id);
      return this.book;
    }
  }

  getUserById(){
    let userId = this.userService.userId;
    this.http.get<User>("http://localhost:3000/Users/"+userId).subscribe(data=>this.user = data);
  }

  getWishlistBooks():Observable<any>{
    let wishlistArray!:number[];
    if(this.user == undefined) return of(this.wishListBooks);
      wishlistArray = this.user.wishList;
      if(wishlistArray.length > 1){
        this.wishListBooks= [this.getBookById(wishlistArray[1])];
        for(let i =2;i<wishlistArray.length;i++){
          this.wishListBooks.push(this.getBookById(wishlistArray[i]));
        }
        return of(this.wishListBooks);
      }
      else{
        return of(this.wishListBooks);
      }
  }
  getCompletedBooks():Observable<any>{
    let completedArray! : number[];
    if(this.user == undefined) return of(this.completedBooks);
    completedArray = this.user.completed;
    if(completedArray.length > 1){
      this.completedBooks = [this.getBookById(completedArray[1])];
      for(let i=2;i<completedArray.length;i++){
        this.completedBooks.push(this.getBookById(completedArray[i]));
      }
      
      return of(this.completedBooks);
    }
    else{
      return of(this.completedBooks);
    }
  }
}
