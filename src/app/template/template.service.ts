import { VERSION_TEXT, VERSION_NUMBER } from '@constants/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  public getVersionText(): string {
    return VERSION_TEXT;
  }
  public getVersionNumber(): string {
    return VERSION_NUMBER;
  }
}
