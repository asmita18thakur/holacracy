import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSimpleRowComponent } from './table-simple-row.component';

describe('TableSimpleRowComponent', () => {
  let component: TableSimpleRowComponent;
  let fixture: ComponentFixture<TableSimpleRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSimpleRowComponent]
    });
    fixture = TestBed.createComponent(TableSimpleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
