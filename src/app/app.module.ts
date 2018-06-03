import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcquisitionTableComponent } from './acquisition-table/acquisition-table.component';

import {AgGridModule} from "ag-grid-angular/main";

import { AddTargetComponent } from './add-target/add-target.component';
import { AcquisitionManagerService } from './services/acquisition-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    AcquisitionTableComponent,
    
    AddTargetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [AcquisitionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
