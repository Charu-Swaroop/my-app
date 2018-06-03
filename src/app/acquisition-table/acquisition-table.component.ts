import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import { AcquisitionManagerService } from '../services/acquisition-manager.service';
import { DataModel } from '../data-model/data.model';

 @Component({
  selector: 'app-acquisition-table',
  templateUrl: './acquisition-table.component.html',
  styleUrls: ['./acquisition-table.component.css']
}) 


export class AcquisitionTableComponent implements OnInit {
  public gridOptions: GridOptions;

  public columnDefs: any[];
  public rowData: any[];
  public defaultColDef;
  constructor( public acquisitionManagerService: AcquisitionManagerService) {
    this.columnDefs = [
      {headerName: 'Status', field: 'Status' ,width:100, editable: true,  cellEditor: "select",
      cellEditorParams: {
        values: [
          "Open",
          "Pending",
          "Approved",
          "Declined",
          
        ]
      }},
      {headerName: 'Company Info', field: 'CompanyInfo',width:200 },
      {headerName: 'Key Contacts', field: 'KeyContacts'},
      {headerName: 'Financial Performance', field: 'Performance',cellEditor: "select",
      cellEditorParams: {
        values: [
          "Average",
          "Good",
          "Achieving",
          "Outstanding"
         
        ]},
      
      
      }];
  this.defaultColDef = { editable: true };
  this.rowData = [
      { Status: 'Open', CompanyInfo: 'Tulip Corportions', KeyContacts: 'Mr.Saxena' ,Performance:'Achieving'},
      { Status: 'Pending', CompanyInfo: 'Arnayka Ltd.', KeyContacts: 'Miss Kasyap' ,Performance:'Good'},
      { Status: 'Open', CompanyInfo: 'ABYSS Systems', KeyContacts: 'Miss Gilbert' ,Performance:'Achieving'},
      { Status: 'Approved', CompanyInfo: 'Epitome Private Ltd.', KeyContacts: 'Mr. Rai' ,Performance:'Outstanding'},
 
  ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowSelection: 'single',
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
        params.api.selectNode(params.api.getRowNode('0'));
      }
    }
    
  }
   
  onRemoveSelected() {
    var selectedData = this.gridOptions.api.getSelectedRows();
    var res = this.gridOptions.api.updateRowData({ remove: selectedData });
 
  }

  public addTarget() {
    this.gridOptions.api.deselectAll();
    this.acquisitionManagerService.selectedTarget = new DataModel(-1, '', '', '', '');
  }
  ngOnInit() {
    
  }
  

}
 