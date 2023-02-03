import { TemplateService } from '@template/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerText = "";

  constructor(private templateService: TemplateService) {}
  ngOnInit() {
    this.headerText = this.templateService.getHeaderText();
  }

}
