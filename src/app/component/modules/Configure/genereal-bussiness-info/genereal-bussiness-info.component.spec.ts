import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerealBussinessInfoComponent } from './genereal-bussiness-info.component';

describe('GenerealBussinessInfoComponent', () => {
  let component: GenerealBussinessInfoComponent;
  let fixture: ComponentFixture<GenerealBussinessInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerealBussinessInfoComponent]
    });
    fixture = TestBed.createComponent(GenerealBussinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
