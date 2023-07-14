import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';
import { Card1Component } from './component/shared/supportive_component/card1/card1.component';
import { Card2Component } from './component/shared/supportive_component/card2/card2.component';
import { PlanCardComponent } from './component/shared/supportive_component/plan-card/plan-card.component';
import { ConfigureSideBarComponent } from './component/shared/supportive_component/configure-side-bar/configure-side-bar.component';
import { GeneralBussinessComponent } from './component/modules/Configure/general-bussiness/general-bussiness.component';
import { FormsModule } from '@angular/forms';
import { GenerealBussinessInfoComponent } from './component/modules/Configure/genereal-bussiness-info/genereal-bussiness-info.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { GovernanceComponent } from './component/modules/Configure/governance/governance.component';
import { TenantBehaviourComponent } from './component/modules/Configure/tenant-behaviour/tenant-behaviour.component';
import { AllianceBehaviourComponent } from './component/modules/Configure/alliance-behaviour/alliance-behaviour.component';
import { ConfigureLoginComponent } from './component/modules/Configure/configure-login/configure-login.component';
import { UserBehaviourComponent } from './component/modules/Configure/user-behaviour/user-behaviour.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { LandingComponent } from './component/landing/landing.component';
import { MyOrganisationComponent } from './component/modules/Configure/my-organisation/my-organisation.component';
import { TableSimpleRowComponent } from './component/shared/supportive_component/table-simple-row/table-simple-row.component';
import { ErrorPageComponent } from './component/modules/Configure/error-page/error-page.component';
import { ProductListingComponent } from './component/shared/supportive_component/product-listing/product-listing.component';
import { ProductListingComponentComponent } from './component/shared/supportive_component/product-listing-component/product-listing-component.component';
import { ColorpickerComponent } from './component/modules/Configure/colorpicker/colorpicker.component';
import { MarketplaceListingPageComponent } from './component/modules/Configure/marketplace-listing-page/marketplace-listing-page.component';
import { BillingComponent } from './component/modules/Configure/billing/billing.component';
import { ApperanceComponent } from './component/modules/Configure/apperance/apperance.component';
import { TableCategoryRowComponent } from './component/shared/supportive_component/table-category-row/table-category-row.component';
import { MyOrganisationModalComponent } from './component/shared/supportive_component/my-organisation-modal/my-organisation-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPageComponent } from './component/modules/Configure/product-page/product-page.component';
import { WalletComponent } from './component/modules/rate-card/wallet/wallet.component';
import { LeftcomponentComponent } from './component/modules/rate-card/wallet/card/leftcomponent/leftcomponent.component';
import { RightComponentComponent } from './component/modules/rate-card/wallet/card/right-component/right-component.component';
import { CardComponent } from './component/modules/rate-card/wallet/card/card.component';
import { GraphcardComponent } from './component/modules/rate-card/wallet/graphcard/graphcard.component';
import { SubscriptionComponent } from './component/modules/rate-card/subscription/subscription.component';
import { NgbdProgressbarHeight } from './component/modules/rate-card/subscription/ProgressBar';
import { RightSidebarComponent } from './component/modules/right-sidebar/right-sidebar.component';
import { RateCardComponent } from './component/modules/rate-card/rate-card.component';
import { NotificationComponent } from './component/modules/rate-card/notification/notification.component';
import { NotificationSnippetComponent } from './component/modules/rate-card/notification/notification-snippet/notification-snippet.component';
import { WalletPopupComponent } from './component/modules/right-sidebar/wallet-popup/wallet-popup.component';
import { ContextSideBarComponent } from './component/shared/supportive_component/context-side-bar/context-side-bar.component';
import { ContextCardComponent } from './component/shared/supportive_component/context-card/context-card.component';
import { CustomDropDownComponent } from './component/shared/supportive_component/custom-drop-down/custom-drop-down.component';
import { RateCardConfigurationComponent } from './component/modules/rate-card-configuration/rate-card-configuration.component';
import { SideBarComponent } from './component/modules/side-bar/side-bar.component';
import { Frame1Component } from './component/shared/supportive_component/frame1/frame1.component';


@NgModule({
  declarations: [
    AppComponent,
    ApperanceSettingComponent,
    Card1Component,
    Card2Component,
    PlanCardComponent,
    ConfigureSideBarComponent,
    GeneralBussinessComponent,
    GovernanceComponent,
    TenantBehaviourComponent,
    GenerealBussinessInfoComponent,
    AllianceBehaviourComponent,
    ConfigureLoginComponent,
    UserBehaviourComponent,
    SidebarComponent,
    LandingComponent,
    MyOrganisationComponent,
    TableSimpleRowComponent,
    ConfigureLoginComponent,
    ErrorPageComponent,
    ProductListingComponent,
    ProductListingComponentComponent,
    ColorpickerComponent,
    MarketplaceListingPageComponent,
    BillingComponent,
    ApperanceComponent,
    TableCategoryRowComponent,
    MyOrganisationModalComponent,
    ProductPageComponent,
    WalletComponent,
    LeftcomponentComponent,
    RightComponentComponent,
    CardComponent,
    GraphcardComponent,
    SubscriptionComponent,
    RightSidebarComponent,
    RateCardComponent,
    NotificationComponent,
    NotificationSnippetComponent,
    WalletPopupComponent,
    ContextSideBarComponent,
    ContextCardComponent,
    CustomDropDownComponent,
    ProductPageComponent,
    RateCardConfigurationComponent,
    SideBarComponent,
    Frame1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ColorPickerModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
