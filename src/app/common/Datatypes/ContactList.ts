import { Contact }    from './Contact';
export class ContactList {
  public contacts:Contact[];
  constructor(contacts:Contact[]){
  	this.contacts=contacts;
  };
}