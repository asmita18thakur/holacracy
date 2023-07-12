import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-marketplace-listing-page',
  templateUrl: './marketplace-listing-page.component.html',
  styleUrls: ['./marketplace-listing-page.component.scss']
})

export class MarketplaceListingPageComponent {
  selectedWord: string = '#4D45A3';
  onColorChange(color: string) {
    this.selectedWord = color;
  }
}
