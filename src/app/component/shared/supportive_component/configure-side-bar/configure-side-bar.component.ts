import { Component } from '@angular/core';
import { ConfigureLoginComponent } from 'src/app/component/modules/Configure/configure-login/configure-login.component';
import { GeneralBussinessComponent } from 'src/app/component/modules/Configure/general-bussiness/general-bussiness.component';
import { GovernanceComponent } from 'src/app/component/modules/Configure/governance/governance.component';
import { TenantBehaviourComponent } from 'src/app/component/modules/Configure/tenant-behaviour/tenant-behaviour.component';
import { GenerealBussinessInfoComponent } from 'src/app/component/modules/Configure/genereal-bussiness-info/genereal-bussiness-info.component';
import { AllianceBehaviourComponent } from 'src/app/component/modules/Configure/alliance-behaviour/alliance-behaviour.component';
import { UserBehaviourComponent } from 'src/app/component/modules/Configure/user-behaviour/user-behaviour.component';
@Component({
  selector: 'app-configure-side-bar',
  templateUrl: './configure-side-bar.component.html',
  styleUrls: ['./configure-side-bar.component.scss']
})
export class ConfigureSideBarComponent {

  contents: string[] = ['general-bussiness','general-bussiness-info', 'about', 'contact','governance','tenant-behaviour','alliance-behaviour','user-behaviour'];

  selectedContent: string = this.contents[0];

  changeContent(content: string): void {
    this.selectedContent = content;
    console.log(content,this.selectedContent)
  }

  getContentComponent(content: string): any {
    switch (content) {
      case 'general-bussiness':
        return GeneralBussinessComponent;
      case 'about':
        return "";
      case 'login':
        return ConfigureLoginComponent;
      case 'governance':
        return GovernanceComponent; 
      case 'general-bussiness-info':
        return GenerealBussinessInfoComponent; 
      case 'tenant-behaviour':
        return TenantBehaviourComponent;
      case 'alliance-behaviour':
        return AllianceBehaviourComponent; 
      case 'user-behaviour':
        return UserBehaviourComponent;     
      default:
        return null;
    }
  }
}
