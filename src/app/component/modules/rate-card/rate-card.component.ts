import { Component } from '@angular/core';
import { WalletComponent } from './wallet/wallet.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NotificationComponent } from './notification/notification.component';
@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent {
  isSelected =3
  component = WalletComponent;
  setComponent(data:string){
      switch(data){
        case "Business" :{
                          this.component = WalletComponent
                          this.isSelected = 1;
                          break;
                        };
        case "Wallet":{
                        this.component = WalletComponent
                        this.isSelected = 3;
                        break
                      };
        case "Subscriptions":{
                        this.component = SubscriptionComponent
                        this.isSelected = 5;
                        break
                      };
        case "Notification":{
          this.component = NotificationComponent
          this.isSelected = 4;
          break
        };
        default: { 
          //statements; 
          break; 
        } 
      }
  }
  
}
