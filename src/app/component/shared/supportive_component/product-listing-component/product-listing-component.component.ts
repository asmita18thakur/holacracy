import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-product-listing-component',
  templateUrl: './product-listing-component.component.html',
  styleUrls: ['./product-listing-component.component.scss']
})
export class ProductListingComponentComponent {
  @Input() heading:any;
  @Input() subheading:any;
  @Input() ownerid:any;
  @Input() description:any;
constructor(){

}

}
