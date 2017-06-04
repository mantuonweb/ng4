//https://toddmotto.com/component-events-event-emitter-output-angular-2
//https://www.npmjs.com/package/angular2-fontawesome
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router,ActivatedRoute }           from '@angular/router';
import { ContactService } from '../../common/ContactService';
import { AuthService } from '../../common/AuthService';
 @Component({
  selector: 'mbs-table',
  templateUrl: 'app/common/Table/Table.html',
  styleUrls: [ ]
})
export class TableComponent implements OnInit {
  @Input('tableData')
  tableData : any[];
  @Input('tableColumns')
  tableColumns : any[];
  @Output('onRowClick')
  outRowData = new EventEmitter<any>();
  constructor()
  {
    console.log('LOGIN');
  }
  onRowClick(row:any){
    console.log(row);
    this.outRowData.emit(row);
  }
  ngOnInit() {

  };
}
