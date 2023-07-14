import { Component } from '@angular/core';
import { ConfigureLoginComponent } from 'src/app/component/modules/Configure/configure-login/configure-login.component';
import { GeneralBussinessComponent } from 'src/app/component/modules/Configure/general-bussiness/general-bussiness.component';
import { GovernanceComponent } from 'src/app/component/modules/Configure/governance/governance.component';
import { TenantBehaviourComponent } from 'src/app/component/modules/Configure/tenant-behaviour/tenant-behaviour.component';
import { GenerealBussinessInfoComponent } from 'src/app/component/modules/Configure/genereal-bussiness-info/genereal-bussiness-info.component';
import { AllianceBehaviourComponent } from 'src/app/component/modules/Configure/alliance-behaviour/alliance-behaviour.component';
import { UserBehaviourComponent } from 'src/app/component/modules/Configure/user-behaviour/user-behaviour.component';
import { MyOrganisationComponent } from 'src/app/component/modules/Configure/my-organisation/my-organisation.component';
import { ErrorPageComponent } from 'src/app/component/modules/Configure/error-page/error-page.component';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { MarketplaceListingPageComponent } from 'src/app/component/modules/Configure/marketplace-listing-page/marketplace-listing-page.component';
import { BillingComponent } from 'src/app/component/modules/Configure/billing/billing.component';
import { ApperanceComponent } from 'src/app/component/modules/Configure/apperance/apperance.component';
import { DataService } from 'data.service';
import { ProductPageComponent } from 'src/app/component/modules/Configure/product-page/product-page.component';

@Component({
  selector: 'app-configure-side-bar',
  templateUrl: './configure-side-bar.component.html',
  styleUrls: ['./configure-side-bar.component.scss']
})
export class ConfigureSideBarComponent {

  constructor(private dataService: DataService) { }




  ngOnInit(){
   const page= localStorage.getItem('page')||'';
   this.changeContent(page);
  }

  contents: string[] = ['general-bussiness','general-bussiness-info', 'login','about', 'contact','governance','tenant-behaviour','alliance-behaviour','user-behaviour'];

  selectedContent: string = this.contents[0];

  changeContent(content: string): void {
    this.selectedContent = content;
    console.log(content,this.selectedContent)
  }

  getContentComponent(content: string): any {
    localStorage.setItem('page',content)
    switch (content) {

      case 'general-bussiness': {
                                    this.dataService.changeData(["Next","Save","Filters","Overlays","Contexts","Groups","CMS","Wallet"])
                                    console.log(this.dataService.getAllData() )
                                    return GeneralBussinessComponent;}
      case 'login':{
                                    return ConfigureLoginComponent;}
      case 'governance':{
                                    this.dataService.changeData(["Next","Save","Contexts"])
                                    return GovernanceComponent; }
      case 'general-bussiness-info':{
                                    this.dataService.changeData(["Next","Save","Filters","Overlays","Contexts","Groups","CMS","Wallet"])
                                    return GenerealBussinessInfoComponent;}
      case 'tenant-behaviour':{
                                    this.dataService.changeData(["Next","Save","Contexts","Groups"])
                                    return TenantBehaviourComponent;}
      case 'alliance-behaviour':{
                                    this.dataService.changeData(["Next","Save","Contexts","Groups"])
                                    return AllianceBehaviourComponent; }
      case 'user-behaviour':
        return UserBehaviourComponent;
      case 'myOrganisation':
        return MyOrganisationComponent
      case 'error':
        return ErrorPageComponent;
      case 'productlisting':
        return ProductListingComponent;
      case 'marketplacelisting':
        return MarketplaceListingPageComponent;
      case 'apperance' :
        return ApperanceComponent;
      case 'productpage':
        return ProductPageComponent;
      case 'billing' :
        localStorage.removeItem('page')
        return BillingComponent;
      default:
        return null;
    }
  }
}
