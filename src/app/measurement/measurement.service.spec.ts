import { Measurement } from '@measurement/measurement';
import { TestBed } from '@angular/core/testing';

import { MeasurementService } from './measurement.service';

describe('MeasurementService', () => {
  let service: MeasurementService;
  const mockMeasurements = [{
    id: 3,
    date: "29.06.2020",
    time: "10:28:02",
    source: "mockSource1",
    phase: "b",
    voltage: 1,
    amperage: 0.6,
    truePower: 2.756,
    reactivePower: 0.9,
    cos: 0.83,
    checked: "mockName1"
  },
  {
    id: 4,
    date: "05.05.2022",
    time: "13:56:39",
    source: "mockSource2",
    phase: "c",
    voltage: 1.2,
    amperage: 0.5,
    truePower: 3.143,
    reactivePower: 0.78,
    cos: 0.67,
    checked: "mockName2"
  },]


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementService);
    service.measurements = mockMeasurements;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('getMeasurements should return mocked data', () => {
  //   let result = [];
  //   service.getMeasurements().subscribe(res => {
  //     result = res;
  //  });
  //   expect(mockMeasurements).toEqual(result);
  // })
});
