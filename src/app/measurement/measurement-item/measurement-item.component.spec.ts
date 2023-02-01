import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementItemComponent } from './measurement-item.component';

describe('MeasurementItemComponent', () => {
  let component: MeasurementItemComponent;
  let fixture: ComponentFixture<MeasurementItemComponent>;
  const mockMeasurement =
  {
    id: 4,
    date: "02.03.2022",
    time: "17:43:51",
    source: "Регистратор",
    phase: "ab",
    voltage: 1.1,
    amperage: 0.4,
    truePower: 3.343,
    reactivePower: 0.76,
    cos: 0.65,
    checked: "Сидоров Геннадий Петрович"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementItemComponent);
    component = fixture.componentInstance;
    component.measurement = mockMeasurement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
