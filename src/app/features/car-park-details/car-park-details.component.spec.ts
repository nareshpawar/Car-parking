import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarParkDetailsComponent } from './car-park-details.component';

describe('CarParkDetailsComponent', () => {
  let component: CarParkDetailsComponent;
  let fixture: ComponentFixture<CarParkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarParkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarParkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
