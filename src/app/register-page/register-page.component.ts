import { User } from './../../assets/classes_interfaces/RegisterClass';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router:Router,private userService:UserServiceService) { }
  resp:any;
  response!:User;
  error!:any;
  message:any;

  ngOnInit(): void {
  }
  
  regiForm(item:any){
    if(item.password == item.cPassword){
      this.response = new User();
      this.response.name = item.name;
      this.response.password = item.password;
      this.response.email = item.email;
      this.response.phone = item.cnumber;
      this.response.wishList[0] = 0;
      this.response.completed[0] = 0;

      this.userService.postUser(this.response).subscribe(data=>{this.resp=data;
        if(this.resp!= undefined)
        this.message="You have registered successfully.";
      },error=>{this.error=error;
      });
    }
    else{
      this.message = "Passwords not matched, try again";
    }

  }

  goBack(){
    this.router.navigate(['']);
  }

}
