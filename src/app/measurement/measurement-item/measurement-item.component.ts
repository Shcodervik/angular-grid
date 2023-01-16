import { LITER_A } from './../../constants/liter-a';
import { Measurement } from '@measurement/measurement';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.css']
})
export class MeasurementItemComponent implements OnInit {
  @Input() measurement!: Measurement;
  isEditable = false;
  ngOnInit(): void {

  }

  edit(): void {
    this.isEditable = !this.isEditable;
    console.log("isEditable=", this.isEditable);
  }

  getSVGImage(): any {
    return LITER_A;
  }

}
