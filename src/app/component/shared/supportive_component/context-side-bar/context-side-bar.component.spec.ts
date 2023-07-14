import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextSideBarComponent } from './context-side-bar.component';

describe('ContextSideBarComponent', () => {
  let component: ContextSideBarComponent;
  let fixture: ComponentFixture<ContextSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextSideBarComponent]
    });
    fixture = TestBed.createComponent(ContextSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
