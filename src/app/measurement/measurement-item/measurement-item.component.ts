import { VerifiedIconService } from '@app/verified-icon/verified-icon.service';
import { Measurement } from '@measurement/measurement';
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.css']
})
export class MeasurementItemComponent implements AfterViewInit {
  @Input() measurement!: Measurement;
  @ViewChild('icon') icon!: ElementRef;
  isEditable = false;
  verifiedIconDefault?: SVGElement = this.verifiedIconService.createVerifiedIcon();
  verifiedIcon?: SVGElement;


  constructor(private verifiedIconService: VerifiedIconService) {}
  ngAfterViewInit(): void {
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(this.verifiedIconDefault, this.measurement.checked.substring(0,1));
    this.icon.nativeElement.appendChild(this.verifiedIcon);
  }

  edit(): void {
    this.isEditable = !this.isEditable;
    console.log("isEditable=", this.isEditable);
  }

  getSVGImage(text: string): any {
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(this.verifiedIconDefault, text.substring(0,1));
    this.icon.nativeElement.appendChild(this.verifiedIcon);

  }


  ​

}
