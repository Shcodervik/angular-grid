import { HeaderComponent } from '@template/header/header.component';
import { FooterComponent } from '@template/footer/footer.component';
import { MeasurementItemComponent } from '@measurement/measurement-item/measurement-item.component';
import { MeasurementListComponent } from '@measurement/measurement-list/measurement-list.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MeasurementListComponent,
        MeasurementItemComponent,
        FooterComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title as 'angular-grid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-grid');
  });

  it('should render test table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container .row .col')?.textContent).toContain('left table 1 from 3');
  });
});
