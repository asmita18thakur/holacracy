import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphcardComponent } from './graphcard.component';

describe('GraphcardComponent', () => {
  let component: GraphcardComponent;
  let fixture: ComponentFixture<GraphcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphcardComponent]
    });
    fixture = TestBed.createComponent(GraphcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
