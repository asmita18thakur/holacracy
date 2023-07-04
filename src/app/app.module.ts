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

import { GovernanceComponent } from './component/modules/Configure/governance/governance.component';
import { ConfigureLoginComponent } from './component/modules/Configure/configure-login/configure-login.component';

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
    GenerealBussinessInfoComponent,
    ConfigureLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
