import { MeasurementItemComponent } from '@measurement/measurement-item/measurement-item.component';
import { of } from 'rxjs';
import { Measurement } from '@measurement/measurement';
import { MeasurementService } from '@measurement/measurement.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';

describe('MeasurementListComponent', () => {
  let component: MeasurementListComponent;
  let fixture: ComponentFixture<MeasurementListComponent>;
  const mockMeasurements: Measurement[] = [{
    id: 4,
    date: "02.03.2022",
    time: "17:43:51",
    source: "Регистратор",
    phase: "ab",
    voltage: 1.1,
    amperage: 0.4,
    truePower: 3.343,
    reactivePower: 0.76,
    cos: 0.65,
    checked: "Сидоров Геннадий Петрович"
  }];
  const mockMeasurementService = {
    getMeasurements() {
      return of(mockMeasurements);
    }
  };

  beforeEach(async () => {
    spyOn(mockMeasurementService, 'getMeasurements').and.callThrough();
    await TestBed.configureTestingModule({
      declarations: [ MeasurementListComponent, MeasurementItemComponent ],
      providers: [ { provide: MeasurementService, useValue: mockMeasurementService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get measurements on init', async() => {
    expect(mockMeasurementService.getMeasurements).toHaveBeenCalled();
  })

});
