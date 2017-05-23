import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService } from '../../../common/AuthService';
import { ContactService } from '../../../common/ContactService';
 @Component({
  selector: 'mbs-contact',
  templateUrl: 'app/Home/Contact/Default/ContactHome.html',
  styleUrls: [ 'app/Home/Contact/Contact.css' ]
})
export class ContactHomeComponent implements OnInit {
  loading:boolean=false;
  contacts:any[];
  sub:any;
  constructor(private router: Router, private auth:AuthService ,private contactService:ContactService)
  {
    console.log('LOGIN',auth);
  }
  ngOnInit() {
    this.loadContacts();
  }
  onContactChange(contact:any){
    this.router.navigateByUrl('/home/'+contact.contactId);
  }

  loadContacts(){
     // Get all contacts
     this.contactService.getContacts().subscribe(
     contacts => this.contacts = contacts, //Bind to view
     err => {
          console.log(err);
     });
    }
}