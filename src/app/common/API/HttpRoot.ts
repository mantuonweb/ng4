import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
export class HttpRoot {
  public url:string;
  public type:string;
  constructor(public http:Http){

  };
  callAPI(){
    this.http.get(this.url).map((resCont:Response) => {
      resCont.json();
    })
                         //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  successHandler(res:any){
    console.log('there');
  }
  failureHandler(res:any){

  }
}