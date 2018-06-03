import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionTableComponent } from './acquisition-table.component';

describe('AcquisitionTableComponent', () => {
  let component: AcquisitionTableComponent;
  let fixture: ComponentFixture<AcquisitionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
