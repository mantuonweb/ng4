
export class Contact {
  public name:string;
  public email:string;
  public phone:string;
  public role:string;
  public id:string;
  constructor(id:string,name:string,email:string,phone:string,role:string){
  	this.id=id;
  	this.name=name;
  	this.email=email;
  	this.phone=phone;
    this.role=role;
  };
}