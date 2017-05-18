import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
//global name space
@Injectable()
export class AuthService {
  isAuthrised:any=null;
  constructor(){
  };
  //get api instance from the sdk
  setAuth(username:string,password:string){
     if(username==="test" && password ==="test")
     {
       this.isAuthrised=true;
     }
     else
      {
        this.isAuthrised=false;
      }
      return this.isAuthrised;
  }
  getAuth(){
    return this.isAuthrised;
  }
}
