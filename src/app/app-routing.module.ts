import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';
import { RatecardMessagecenterComponent } from './component/modules/ratecard-messagecenter/ratecard-messagecenter.component';
import { PlanCardComponent } from './component/shared/supportive_component/plan-card/plan-card.component';
import { ConfigureSideBarComponent } from './component/shared/supportive_component/configure-side-bar/configure-side-bar.component';

const routes: Routes = [
  {
    path:'apperancesetting',
    component:ApperanceSettingComponent
  },
  {
    path:'messagecenter',
    component:RatecardMessagecenterComponent

  },
  {
    path:'card',
    component:ConfigureSideBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
