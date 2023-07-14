import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
   paragraphColor: string = '#1D3159';


  changeParagraphColor(color: string) {
    this.paragraphColor = color;
  }


}
