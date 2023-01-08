import { CompletedComponent } from './completed/completed.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthguardService } from './authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'register',component:RegisterPageComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthguardService]
  ,children:[
    { path:'booklist', component:BooklistComponent},
    { path:'bookdetails/:id',component:BookDetailsComponent},
    { path:'wishlist',component:WishlistComponent},
    { path:'completed',component:CompletedComponent}
  ]

},
  { path:'booklist',component:BooklistComponent},
  { path:'bookdetails/:id',component:BookDetailsComponent},
  { path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
