import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {  }

  mousedown(event: any) {
    event.preventDefault();
    document.getElementById('panel')!.addEventListener('pointermove', this.handleSplitterMove);
  }

  handleSplitterMove(event: any) {
    const panel = document.getElementById('panel')!;
    const box1 = document.getElementById('sidebar')!;
    const box2 = document.getElementById('main')!;
    const splitter = document.getElementById('dragbar')!.getBoundingClientRect();
    box1.style.width = event.x + "px";
    const difference = panel.getBoundingClientRect().width - splitter.width - event.x;
    box2.style.width = difference + "px";
    box2.style.left = box1.style.width + "px";
  }

  mouseup(event: any) {
    event.preventDefault();
    document.getElementById('panel')!.removeEventListener('pointermove', this.handleSplitterMove);
  }

}
