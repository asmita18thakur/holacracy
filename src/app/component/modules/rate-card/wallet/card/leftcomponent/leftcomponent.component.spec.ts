import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcomponentComponent } from './leftcomponent.component';

describe('LeftcomponentComponent', () => {
  let component: LeftcomponentComponent;
  let fixture: ComponentFixture<LeftcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftcomponentComponent]
    });
    fixture = TestBed.createComponent(LeftcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
