import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatecardMessagecenterComponent } from './ratecard-messagecenter.component';

describe('RatecardMessagecenterComponent', () => {
  let component: RatecardMessagecenterComponent;
  let fixture: ComponentFixture<RatecardMessagecenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatecardMessagecenterComponent]
    });
    fixture = TestBed.createComponent(RatecardMessagecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
