import { Component } from '@angular/core';
import { GeneralBussinessComponent } from 'src/app/component/modules/Configure/general-bussiness/general-bussiness.component';
import { GovernanceComponent } from 'src/app/component/modules/Configure/governance/governance.component';
import { GenerealBussinessInfoComponent } from 'src/app/component/modules/Configure/genereal-bussiness-info/genereal-bussiness-info.component';

@Component({
  selector: 'app-configure-side-bar',
  templateUrl: './configure-side-bar.component.html',
  styleUrls: ['./configure-side-bar.component.scss']
})
export class ConfigureSideBarComponent {
  contents: string[] = ['general-bussiness','general-bussiness', 'about', 'contact','governance'];
  selectedContent: string = this.contents[0];

  changeContent(content: string): void {
    this.selectedContent = content;
  }

  getContentComponent(content: string): any {
    switch (content) {
      case 'general-bussiness':
        return GeneralBussinessComponent;
      case 'general-bussiness-info':
        return GenerealBussinessInfoComponent;
      case 'about':
        return "";
      case 'contact':
        return "";
      case 'governance':
        return GovernanceComponent;  
      default:
        return null;
    }
  }
}
