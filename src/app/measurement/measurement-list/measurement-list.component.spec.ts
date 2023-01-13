import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';

describe('MeasurementComponent', () => {
  let component: MeasurementListComponent;
  let fixture: ComponentFixture<MeasurementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
