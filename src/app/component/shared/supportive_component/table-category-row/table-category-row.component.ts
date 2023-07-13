import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table-category-row',
  templateUrl: './table-category-row.component.html',
  styleUrls: ['./table-category-row.component.scss']
})
export class TableCategoryRowComponent {
  @Input() item: any;
}
