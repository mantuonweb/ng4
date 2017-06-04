//http://plnkr.co/edit/5gb5E4curAE2EfH2lNZQ?p=preview
//https://thinkster.io/tutorials/angular-2-http
//https://stackoverflow.com/questions/44342082/rest-request-using-inheritance-in-angular-2
import { Injector }    from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
export class HttpRoot {
  public url:string;
  public type:string;
  protected http:Http;
  constructor(public injector:Injector){
    this.http = injector.get(Http);
  };
  callAPI(){
    return this.http.get(this.url).map((response:Response) => {
      return response;
    }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  successHandler(res:any){
    console.log('there');
  }
  failureHandler(res:any){

  }
}