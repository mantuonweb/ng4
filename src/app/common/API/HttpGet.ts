import { HttpRoot }    from './HttpRoot';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
export class HttpGet extends HttpRoot {
  public type:string;
  constructor(public url:string,public http:Http){
    super(http);
    this.type="GET";
  };
}