import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSideBarComponent } from './configure-side-bar.component';

describe('ConfigureSideBarComponent', () => {
  let component: ConfigureSideBarComponent;
  let fixture: ComponentFixture<ConfigureSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureSideBarComponent]
    });
    fixture = TestBed.createComponent(ConfigureSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
