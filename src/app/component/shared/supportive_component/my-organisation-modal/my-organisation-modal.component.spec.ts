import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrganisationModalComponent } from './my-organisation-modal.component';

describe('MyOrganisationModalComponent', () => {
  let component: MyOrganisationModalComponent;
  let fixture: ComponentFixture<MyOrganisationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrganisationModalComponent]
    });
    fixture = TestBed.createComponent(MyOrganisationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
