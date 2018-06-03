import { DataModel } from './../data-model/data.model';
import { Injectable } from '@angular/core';
import { Performance } from '../data-model/performance.enum';
import { Status } from '../data-model/status.enum';

@Injectable()
export class AcquisitionManagerService {
  public targets: DataModel[] = [];
  public selectedTarget: DataModel = new DataModel(-1, '', '', '', '');

 

  public addNewTargets(newTarget: DataModel) {
    this.targets.push(newTarget);
  }

  public bindStatusList() {
    const optionsStatus = [];
    optionsStatus.push({ id: Status.Approval, name: Status[Status.Approval] });
    optionsStatus.push({ id: Status.Approved, name: Status[Status.Approved] });
    optionsStatus.push({ id: Status.Declined, name: Status[Status.Declined] });
    optionsStatus.push({ id: Status.Pending, name: Status[Status.Pending] });
    optionsStatus.push({ id: Status.Researching, name: Status[Status.Researching] });
    return optionsStatus;
  }

  public bindPerformanceList() {
    const optionsPerformance = [];
    optionsPerformance.push({ id: Performance.Average, name: Performance[Performance.Average] });
    optionsPerformance.push({ id: Performance.Good, name: Performance[Performance.Good] });
    optionsPerformance.push({ id: Performance.Achieving, name: Performance[Performance.Achieving] });
    optionsPerformance.push({ id: Performance.Outstanding, name: Performance[Performance.Outstanding] });
    return optionsPerformance;
  }

}
