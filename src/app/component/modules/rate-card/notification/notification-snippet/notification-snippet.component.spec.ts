import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSnippetComponent } from './notification-snippet.component';

describe('NotificationSnippetComponent', () => {
  let component: NotificationSnippetComponent;
  let fixture: ComponentFixture<NotificationSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationSnippetComponent]
    });
    fixture = TestBed.createComponent(NotificationSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
