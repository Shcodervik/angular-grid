import { MEASUREMENTS } from '@constants/mock-measurements';
import { Injectable } from '@angular/core';
import { Measurement } from '@measurement/measurement';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  measurements = MEASUREMENTS;

  constructor() { }

  public getMeasurements(): Observable<Measurement[]> {
    return of(this.measurements);
  }
}
