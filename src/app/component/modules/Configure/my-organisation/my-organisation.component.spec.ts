import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrganisationComponent } from './my-organisation.component';

describe('MyOrganisationComponent', () => {
  let component: MyOrganisationComponent;
  let fixture: ComponentFixture<MyOrganisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrganisationComponent]
    });
    fixture = TestBed.createComponent(MyOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
