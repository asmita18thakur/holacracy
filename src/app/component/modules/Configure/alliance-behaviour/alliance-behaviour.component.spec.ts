import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceBehaviourComponent } from './alliance-behaviour.component';

describe('AllianceBehaviourComponent', () => {
  let component: AllianceBehaviourComponent;
  let fixture: ComponentFixture<AllianceBehaviourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllianceBehaviourComponent]
    });
    fixture = TestBed.createComponent(AllianceBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
