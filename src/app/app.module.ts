import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';
import { MeasurementItemComponent } from './measurement/measurement-item/measurement-item.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ContentComponent } from './template/content/content.component';
import { SimpleTableComponent } from './template/simple-table/simple-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementListComponent,
    MeasurementItemComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    SimpleTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
