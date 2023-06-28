import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApperanceSettingComponent } from './component/modules/apperance-setting/apperance-setting.component';

const routes: Routes = [
  {
    path:'apperancesetting',
    component:ApperanceSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
