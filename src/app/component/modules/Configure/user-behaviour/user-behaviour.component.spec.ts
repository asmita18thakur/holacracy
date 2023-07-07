import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBehaviourComponent } from './user-behaviour.component';

describe('UserBehaviourComponent', () => {
  let component: UserBehaviourComponent;
  let fixture: ComponentFixture<UserBehaviourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBehaviourComponent]
    });
    fixture = TestBed.createComponent(UserBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
