import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardConfigurationComponent } from './rate-card-configuration.component';

describe('RateCardConfigurationComponent', () => {
  let component: RateCardConfigurationComponent;
  let fixture: ComponentFixture<RateCardConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateCardConfigurationComponent]
    });
    fixture = TestBed.createComponent(RateCardConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
