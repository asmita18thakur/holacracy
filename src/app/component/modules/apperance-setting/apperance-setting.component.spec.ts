import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperanceSettingComponent } from './apperance-setting.component';

describe('ApperanceSettingComponent', () => {
  let component: ApperanceSettingComponent;
  let fixture: ComponentFixture<ApperanceSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApperanceSettingComponent]
    });
    fixture = TestBed.createComponent(ApperanceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
