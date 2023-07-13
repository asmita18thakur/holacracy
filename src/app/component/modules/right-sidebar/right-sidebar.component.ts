import { Component } from '@angular/core';
import { DataService } from 'data.service';


@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {
  constructor(public data: DataService){}

  sidebarData:{[name:string]:string} = {
                 Next:"Interface Download Square.svg",
                 Save:"Interface Content Save.svg",
                 Filters:"New Filter Slide.svg",
                 Overlays:"Interface Align Layers 1.svg",
                 Contexts:"Condition.svg",
                 Groups:"Amazon Web Service Cluster.svg",
                 CMS:"Book 2.svg",
                Wallet:"wallet--money-payment-finance-wallet.svg"
              
              };
  //  data = this.data.getAllData();
    


                
}
