import { Component } from '@angular/core';
import { GeneralBussinessComponent } from 'src/app/component/modules/Configure/general-bussiness/general-bussiness.component';

@Component({
  selector: 'app-configure-side-bar',
  templateUrl: './configure-side-bar.component.html',
  styleUrls: ['./configure-side-bar.component.scss']
})
export class ConfigureSideBarComponent {
  contents: string[] = ['general-bussiness', 'about', 'contact'];
  selectedContent: string = this.contents[0];

  changeContent(content: string): void {
    this.selectedContent = content;
  }

  getContentComponent(content: string): any {
    switch (content) {
      case 'general-bussiness':
        return GeneralBussinessComponent;
      case 'about':
        return "";
      case 'contact':
        return "";
      default:
        return null;
    }
  }
}
