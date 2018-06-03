import { Component, OnInit,Input } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { AcquisitionManagerService } from '../services/acquisition-manager.service';

import { Status } from '../data-model/status.enum';
import { Performance } from '../data-model/performance.enum';
import { DataModel } from '../data-model/data.model';


@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrls: ['./add-target.component.css']
})
export class AddTargetComponent implements OnInit {
  @Input() targetGridOptions: GridOptions;
  public optionsStatus = [];
  public optionsPerformance = [];

  constructor(public acquisitionManagerService: AcquisitionManagerService
    ) {
    
    this.optionsStatus = this.acquisitionManagerService.bindStatusList();
    this.optionsPerformance = this.acquisitionManagerService.bindPerformanceList();

  }

  ngOnInit() {
  }

  public saveUpdateTarget() {
    if (this.acquisitionManagerService.selectedTarget.CompanyInfo === '' ||
      this.acquisitionManagerService.selectedTarget.KeyContacts === '' ||
      this.acquisitionManagerService.selectedTarget.Status === '' ||
      this.acquisitionManagerService.selectedTarget.Performance === '') {
      
      return false;
    }
    if (!this.acquisitionManagerService.selectedTarget || this.acquisitionManagerService.selectedTarget.id === -1) {
      let newTarget = new DataModel((this.targetGridOptions.api.getDisplayedRowCount() + 1), Status[this.acquisitionManagerService.selectedTarget.Status], this.acquisitionManagerService.selectedTarget.CompanyInfo, this.acquisitionManagerService.selectedTarget.KeyContacts, Performance[this.acquisitionManagerService.selectedTarget.Performance]);
      this.targetGridOptions.api.insertItemsAtIndex(this.targetGridOptions.api.getDisplayedRowCount(), [newTarget]);
      
    } else {
      var rowNode = this.targetGridOptions.api.getRowNode((this.acquisitionManagerService.selectedTarget.id - 1).toString());
      if (!rowNode) {
        rowNode = this.targetGridOptions.api.getDisplayedRowAtIndex(this.acquisitionManagerService.selectedTarget.id - 1);
      }
      rowNode.setDataValue("Status", Status[this.acquisitionManagerService.selectedTarget.Status]);
      rowNode.setDataValue("CompanyInfo", this.acquisitionManagerService.selectedTarget.CompanyInfo);
      rowNode.setDataValue("KeyContacts", this.acquisitionManagerService.selectedTarget.KeyContacts);
      rowNode.setDataValue("Performance", Performance[this.acquisitionManagerService.selectedTarget.Performance]);
     // this.toastr.success('Target Updated Sucessfully!', 'Success!', { 'positionClass': 'toast-bottom-right' });
    }
  }

}
