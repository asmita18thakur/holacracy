import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';
import { RatecardMessagecenterComponent } from './component/modules/ratecard-messagecenter/ratecard-messagecenter.component';

const routes: Routes = [
  {
    path:'apperancesetting',
    component:ApperanceSettingComponent
  },
  {
    path:'messagecenter',
    component:RatecardMessagecenterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
