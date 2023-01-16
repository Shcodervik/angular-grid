import { VerifiedIconService } from '@app/verified-icon/verified-icon.service';
import { Measurement } from '@measurement/measurement';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.css']
})
export class MeasurementItemComponent implements OnInit {
  @Input() measurement!: Measurement;
  isEditable = false;
  verifiedIcon?: SVGElement = this.verifiedIconService.createVerifiedIcon();

  constructor(private verifiedIconService: VerifiedIconService) {}
  ngOnInit(): void {
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(this.verifiedIcon, this.measurement.checked.substring(0,1));
  }

  edit(): void {
    this.isEditable = !this.isEditable;
    console.log("isEditable=", this.isEditable);
  }

  getSVGImage(text: string): any {
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(this.verifiedIcon, text.substring(0,1));
  }


  ​

}
