import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from './common/Table/TableModule';
import { LoginComponent }  from './Login/Login';
import { HomeComponent }  from './Home/Home';
import { ContactComponent }  from './Home/Contact/Contact';
import { ContactHomeComponent }  from './Home/Contact/Default/ContactHome';
import { AuthService } from "./common/AuthService";
import { ContactService } from "./common/ContactService";
import { AppComponent }  from './app.component';
//routing added
//child routing
import { AppRoutingModule, routedComponents } from './app.router.main';
const routes: Routes = [

];
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule,RouterModule.forRoot(routes, { useHash: true }),TableModule],
  declarations: [ AppComponent,LoginComponent,HomeComponent,ContactComponent,ContactHomeComponent],
  providers: [
    AuthService,ContactService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
