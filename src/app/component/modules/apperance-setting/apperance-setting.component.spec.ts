import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApperanceSettingComponent } from './apperance-setting.component';
import { Card2Component } from '../../shared/supportive_component/card2/card2.component';

describe('ApperanceSettingComponent', () => {
  let component: ApperanceSettingComponent;
  let fixture: ComponentFixture<ApperanceSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApperanceSettingComponent,Card2Component]
    });
    fixture = TestBed.createComponent(ApperanceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
