//https://stackoverflow.com/questions/39038791/inheritance-and-dependency-injection
import { HttpRoot }    from './HttpRoot';
import { Injector }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
export class HttpGet extends HttpRoot {
  constructor(public injector:Injector,public url:string){
    super(injector);
    this.type="GET";
  };
}