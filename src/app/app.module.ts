import { NgxResizableModule } from '@3dgenomes/ngx-resizable';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';
import { MeasurementItemComponent } from './measurement/measurement-item/measurement-item.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementListComponent,
    MeasurementItemComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
