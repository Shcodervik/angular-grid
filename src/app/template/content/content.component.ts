import { ElementRef, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {
  //@ViewChild('resizer') resizer!: ElementRef;


  constructor() {}

  ngAfterViewInit() {



  }
  mousedown(event: any) {
    event.preventDefault();
    document.getElementById('panel')!.addEventListener('pointermove', this.handleSplitterMove);

    console.log("I'm here!")
  }

  handleSplitterMove(event: any) {
    console.log(event.x + " " + event.y);
    const panel = document.getElementById('panel')!;
    const box1 = document.getElementById('sidebar')!;
    const box2 = document.getElementById('main')!;
    const splitter = document.getElementById('dragbar')!.getBoundingClientRect();
    box1.style.width = event.x+"px";
    const difference = Number(panel.style.width) - Number(box1.style.width);
    box2.style.width = difference+"px";
    box2.style.left = box1.style.width + "px";


  }

  mouseup(event: any) {
    event.preventDefault();
    document.getElementById('panel')!.removeEventListener('pointermove', this.handleSplitterMove);
    console.log("And now here!");
  }

}
