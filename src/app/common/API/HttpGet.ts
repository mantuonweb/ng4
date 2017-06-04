//https://stackoverflow.com/questions/39038791/inheritance-and-dependency-injection
import { HttpRoot }    from './HttpRoot';
import { Injector }    from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
export class HttpGet extends HttpRoot {
  constructor(public injector:Injector,public url:string){
    super(injector);
    this.http = injector.get(Http);
  };
  private callAPI(){
  	return this.http.get(this.url).map((response:Response) => {
        return response;
      }).catch((error:any) => {
      	 return Observable.throw(error.json().error || 'Server error');
      });
  }
  sendRequest(){
  	 return new Promise((resolve, reject)=> {
	      return this.callAPI().subscribe(data => {
	            var temp = data.json();
	            resolve(temp);
	      });
	 });
  }
}