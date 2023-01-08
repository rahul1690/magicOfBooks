import { UserServiceService } from './user-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  isLogged:any;

  constructor(private userService:UserServiceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.isLogged = this.userService.isLoggin;
    if(!this.isLogged)
    {
      alert('Invalid user');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
