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

import { ErrorPageComponent } from './component/modules/Configure/error-page/error-page.component';
import { ProductListingComponent } from './component/shared/supportive_component/product-listing/product-listing.component';
import { ProductListingComponentComponent } from './component/shared/supportive_component/product-listing-component/product-listing-component.component';
import { ColorpickerComponent } from './component/modules/Configure/colorpicker/colorpicker.component';


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
    ConfigureLoginComponent,
    ErrorPageComponent,
    ProductListingComponent,
    ProductListingComponentComponent,
    ColorpickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
