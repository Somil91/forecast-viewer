import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastOverviewComponent } from './city-forecast-overview.component';

describe('CityForecastOverviewComponent', () => {
  let component: CityForecastOverviewComponent;
  let fixture: ComponentFixture<CityForecastOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityForecastOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
