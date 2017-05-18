import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import { AuthService } from '../common/AuthService';
import { ContactService } from '../common/ContactService';
import { ContactComponent } from '../Home/Contact/Contact';
import { ContactHomeComponent }  from '../Home/Contact/Default/ContactHome';
declare var $: any;
 @Component({
  selector: 'mbs-login',
  templateUrl: 'app/Home/Home.html',
  styleUrls: ['app/Home/Home.css']
})
export class HomeComponent implements OnInit {
  username:string="";
  password:string="";
  loading:boolean=false;
  contacts:any[];
  sub:any;
  constructor(private router: Router,private route: ActivatedRoute, private auth:AuthService,private contactService:ContactService)
  {
    console.log('Home',auth);
  }

  ngOnInit() {
    $("#wrapper").toggleClass("toggled");
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
//exports to outer world
export const routes: Routes = [
  { path: '', component: ContactHomeComponent },
  { path: ':userid', component: ContactComponent }
];
//Second components
@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [RouterModule]
})
export class HomeModule {
  //@todo
}