import { Component } from '@angular/core';
import { product_listing } from 'src/app/contants/temp';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {
  product:any[]=product_listing;

  constructor(){

  }


}
