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
  tableHeader:any[];
  constructor(private router: Router, private auth:AuthService ,private contactService:ContactService)
  {
    this.tableHeader =[{columnName:'name',displayValue:'Name'},{columnName:'emailAddress',displayValue:'Address'},{columnName:'phoneNumber',displayValue:'Phone'}]
  }
  ngOnInit() {
    this.loadContacts();
  }
  onContactChange(contact:any){
    this.router.navigateByUrl('/home/'+contact.contactId);
  }

  loadContacts(){
     // Get all contacts
     this.contactService.getContacts().then((contacts)=>{
         this.contacts=contacts;
     },()=>{

     });
  }
}