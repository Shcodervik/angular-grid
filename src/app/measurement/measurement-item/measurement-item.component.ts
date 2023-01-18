import { VerifiedIconService } from '@app/verified-icon/verified-icon.service';
import { Measurement } from '@measurement/measurement';
import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.css']
})
export class MeasurementItemComponent implements AfterViewInit {
  @Input() measurement!: Measurement;

  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('verified') verifiedInput!: ElementRef;

  @Output() verificationChangeEvent = new EventEmitter<Measurement>();

  isEditable = false;
  verifiedIcon?: SVGElement;

  constructor(private verifiedIconService: VerifiedIconService) {}

  ngAfterViewInit(): void {
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(this.measurement.checked.substring(0,1));
    this.icon.nativeElement.appendChild(this.verifiedIcon);
  }

  update(value: string): void {
    this.measurement.checked = value;
    this.verificationChangeEvent.emit(this.measurement);
    this.updateSVGImage(value);
    this.isEditable = false;
  }

  setEditable(isEditable: string): void {
    if(isEditable == "true") {
      this.isEditable = true;
      setTimeout(() => { // this will make the execution after the above boolean has changed
        this.verifiedInput.nativeElement.focus();
      }, 0);
    }
  }

  updateSVGImage(text: string): void {
    const oldVerifiedIcon = this.verifiedIcon;
    this.verifiedIcon = this.verifiedIconService.addTextToVerifiedIcon(text.trimStart().substring(0,1));
    this.icon.nativeElement.removeChild(oldVerifiedIcon);
    this.icon.nativeElement.appendChild(this.verifiedIcon);
  }

}
