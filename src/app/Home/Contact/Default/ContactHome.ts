import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService } from '../../../common/AuthService';
 @Component({
  selector: 'mbs-contact',
  templateUrl: 'app/Home/Contact/Default/ContactHome.html',
  styleUrls: [ 'app/Home/Contact/Contact.css' ]
})
export class ContactHomeComponent implements OnInit {
  username:string="";
  password:string="";
  loading:boolean=false;
  constructor(private router: Router, private auth:AuthService)
  {
    console.log('LOGIN',auth);
  }
  ngOnInit() {

  }
}