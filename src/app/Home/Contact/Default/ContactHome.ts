import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService } from '../../../common/AuthService';
import { ContactService } from '../../../common/ContactService';
import { ContactList } from '../../../common/Datatypes/ContactList';
 @Component({
  selector: 'mbs-contact',
  templateUrl: 'app/Home/Contact/Default/ContactHome.html',
  styleUrls: [ 'app/Home/Contact/Contact.css' ]
})
export class ContactHomeComponent implements OnInit {
  loading:boolean=false;
  contacts:ContactList;
  sub:any;
  tableHeader:any[];
  constructor(private router: Router, private auth:AuthService ,private contactService:ContactService)
  {
    //the colums def
    this.tableHeader =[{columnName:'name',displayValue:'Name'},{columnName:'email',displayValue:'Email'},{columnName:'phone',displayValue:'Phone'}]
  }
  ngOnInit() {
    this.loadContacts();
  }
  onContactChange(contact:any){
    this.router.navigateByUrl('/home/'+contact.id);
  }

  loadContacts(){
     // Get all contacts
     this.contactService.getContacts().then((contacts:ContactList)=>{
         this.contacts=contacts;
     },()=>{

     });
  }
}