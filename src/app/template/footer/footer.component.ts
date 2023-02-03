import { TemplateService } from '@template/template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  versionText = "";
  versionNumber = "";

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.versionText = this.templateService.getVersionText();
    this.versionNumber = this.templateService.getVersionNumber();
  }

}
