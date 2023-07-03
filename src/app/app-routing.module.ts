import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';
import { PlanCardComponent } from './component/shared/supportive_component/plan-card/plan-card.component';
import { ConfigureSideBarComponent } from './component/shared/supportive_component/configure-side-bar/configure-side-bar.component';

const routes: Routes = [
  {
    path:'apperancesetting',
    component:ApperanceSettingComponent
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
