import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {TableComponent} from './TableComponent';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ TableComponent],
  providers: [],
  exports:[TableComponent]
})
export class TableModule {

}