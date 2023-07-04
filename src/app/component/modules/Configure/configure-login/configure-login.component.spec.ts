import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureLoginComponent } from './configure-login.component';

describe('ConfigureLoginComponent', () => {
  let component: ConfigureLoginComponent;
  let fixture: ComponentFixture<ConfigureLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureLoginComponent]
    });
    fixture = TestBed.createComponent(ConfigureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
