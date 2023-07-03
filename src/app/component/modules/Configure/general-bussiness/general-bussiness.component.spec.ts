import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBussinessComponent } from './general-bussiness.component';

describe('GeneralBussinessComponent', () => {
  let component: GeneralBussinessComponent;
  let fixture: ComponentFixture<GeneralBussinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralBussinessComponent]
    });
    fixture = TestBed.createComponent(GeneralBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
