import { Measurement } from '@measurement/measurement';
import { Component, Input, OnInit } from '@angular/core';
import { MeasurementService } from '@measurement/measurement.service';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {
  titles: string[] = ['Дата', 'Время', 'Источник', 'Фаза', 'Проверено'];
  measurementList?: Measurement[];

  constructor(private measurementService: MeasurementService) {}
  ngOnInit(): void {
    this.getMeasurements();
  }

  getMeasurements(): void {
    this.measurementService.getMeasurements().subscribe(measurements => this.measurementList = measurements);
  }
}
