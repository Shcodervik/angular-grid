import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';
import { MeasurementItemComponent } from './measurement/measurement-item/measurement-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementListComponent,
    MeasurementItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
