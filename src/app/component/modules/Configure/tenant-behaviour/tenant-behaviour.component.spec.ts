import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantBehaviourComponent } from './tenant-behaviour.component';

describe('TenantBehaviourComponent', () => {
  let component: TenantBehaviourComponent;
  let fixture: ComponentFixture<TenantBehaviourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantBehaviourComponent]
    });
    fixture = TestBed.createComponent(TenantBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
