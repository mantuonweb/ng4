import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
//global name space
@Injectable()
export class ContactService {
  //https://plnkr.co/edit/jfUIrVZyajLv8KnDrhL2?p=info
  //http://stackoverflow.com/questions/33721276/angular-2-no-provider-for-http
  //http request exmaples
  commentsUrl:string="/data/data.json";
  constructor(private http:Http){

  };
  contacts:any[];
  getContacts(){
    return this.http.get(this.commentsUrl).map((res:Response) => {
      this.contacts=res.json();
      return this.contacts;
    })
                         //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getContact(contactId:any){
    return new Promise((resolve, reject)=> {
      let contact=this.contacts.find((x:any) => x.contactId == contactId);
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
