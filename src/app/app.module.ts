import { RouterModule } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { SetWishlistCompletedService } from './set-wishlist-completed.service';
import { FetchBooksService } from './fetch-books.service';
import { UserServiceService } from './user-service.service';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompletedComponent } from './completed/completed.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    RegisterPageComponent,
    BooklistComponent,
    BookDetailsComponent,
    DashboardComponent ,
    WishlistComponent,
    CompletedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [UserServiceService,FetchBooksService,SetWishlistCompletedService,AuthguardService],
  bootstrap: [AppComponent],
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)]
})
export class AppModule { }
