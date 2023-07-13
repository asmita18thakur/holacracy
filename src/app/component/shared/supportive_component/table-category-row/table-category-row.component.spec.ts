import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoryRowComponent } from './table-category-row.component';

describe('TableCategoryRowComponent', () => {
  let component: TableCategoryRowComponent;
  let fixture: ComponentFixture<TableCategoryRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCategoryRowComponent]
    });
    fixture = TestBed.createComponent(TableCategoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
