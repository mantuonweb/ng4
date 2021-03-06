import { Injectable,Injector }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpGet } from './API/HttpGet';
import { Contact } from './DataTypes/Contact';
import { ContactList } from './DataTypes/ContactList';
import {Observable} from 'rxjs/Rx';
//global name space
@Injectable()
export class ContactService {
  //http://wijmo.com/blog/using-class-inheritance-to-create-a-custom-component-in-angular-2/
  //https://plnkr.co/edit/jfUIrVZyajLv8KnDrhL2?p=info
  //http://stackoverflow.com/questions/33721276/angular-2-no-provider-for-http
  //https://github.com/angular/angular/issues/5675
  //http request exmaples
  commentsUrl:string='../data/data.json';//"../data/data.json";
  constructor(private http:Http,private injector:Injector){

  };
  contacts:any[];
  private getRequest:HttpGet;
  //
  getContacts(){
     return new Promise((resolve, reject)=> {
        this.getRequest=new HttpGet(this.injector,this.commentsUrl);
        this.getRequest.sendRequest().then((contacts:any[])=>{
          var list=contacts.map((item)=>{
            return new Contact(item.contactId,item.name,item.emailAddress,item.phoneNumber,item.responsibility);
          });
          var contactList = new ContactList(list);
          this.contacts=list;
          resolve(contactList);
        },()=>{
          reject();
        });
      });
  }
  getContact(contactId:any){
    return new Promise((resolve, reject)=> {
      let contact=this.contacts.find((x:any) => x.id === contactId);
      if(contact)
      {
        resolve(contact)
      }
      else
      {
        reject();
      }
    });
  }
}
