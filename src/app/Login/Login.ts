import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService } from '../common/AuthService';
 @Component({
  selector: 'mbs-login',
  templateUrl: 'app/Login/Login.html',
  styleUrls: ['app/Login/Login.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  loading:boolean=false;
  constructor(private router: Router, private auth:AuthService)
  {
    console.log('LOGIN',auth);
  }

  ngOnInit() {
  }

  login() {
   if(this.auth.setAuth(this.username, this.password)){
     this.router.navigateByUrl('/home');
   }
   else
    {
      alert("Failure");
    }
  }
}