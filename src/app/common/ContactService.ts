import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpGet } from './API/HttpGet';
import {Observable} from 'rxjs/Rx';
//global name space
@Injectable()
export class ContactService {
  //https://plnkr.co/edit/jfUIrVZyajLv8KnDrhL2?p=info
  //http://stackoverflow.com/questions/33721276/angular-2-no-provider-for-http
  //http request exmaples
  commentsUrl:string="http://www.mocky.io/v2/593111b6100000be12995ffb";
  constructor(private http:Http){

  };
  contacts:any[];
  private getRequest:HttpGet;
  //
  getContacts(){
    // this.getRequest=new HttpGet(this.commentsUrl,this.http);
    // var returnRES = this.getRequest.callAPI();
    return this.http.get(this.commentsUrl).map((resCont:Response) => {
      this.contacts=resCont.json();
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
