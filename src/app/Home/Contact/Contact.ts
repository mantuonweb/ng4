import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }           from '@angular/router';
import { ContactService } from '../../common/ContactService';
import { AuthService } from '../../common/AuthService';
 @Component({
  selector: 'mbs-contact',
  templateUrl: 'app/Home/Contact/Contact.html',
  styleUrls: [ 'app/Home/Contact/Contact.css' ]
})
export class ContactComponent implements OnInit {
  username:string="";
  password:string="";
  loading:boolean=false;
  contact:any;
  contacts:any[];
  contactid:any;
  sub:any;
  constructor(private router: Router,private route :ActivatedRoute, private auth:AuthService,private contactService:ContactService) 
  {
    console.log('LOGIN',auth);
  }
  loadContact(){
    this.contactService.getContact(this.contactid).then((contact:any) => {
      this.contact=contact;
    });
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['userid'] !== undefined) {
        this.contactid=params['userid'];
        this.loadContact();
        console.log(this.contactid);
      } else {
        console.log('no params');
      }
    });
  }
}