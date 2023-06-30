import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';
import { Card1Component } from './component/shared/supportive_component/card1/card1.component';
import { Card2Component } from './component/shared/supportive_component/card2/card2.component';
import { RateCardConfigLedgerComponent } from './component/modules/rate-card-config-ledger/rate-card-config-ledger.component';
import { RatecardMessagecenterComponent } from './component/modules/ratecard-messagecenter/ratecard-messagecenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ApperanceSettingComponent,
    Card1Component,
    Card2Component,
    RateCardConfigLedgerComponent,
    RatecardMessagecenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
