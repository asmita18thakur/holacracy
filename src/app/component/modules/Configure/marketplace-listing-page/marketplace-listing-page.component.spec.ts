import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceListingPageComponent } from './marketplace-listing-page.component';

describe('MarketplaceListingPageComponent', () => {
  let component: MarketplaceListingPageComponent;
  let fixture: ComponentFixture<MarketplaceListingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceListingPageComponent]
    });
    fixture = TestBed.createComponent(MarketplaceListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
