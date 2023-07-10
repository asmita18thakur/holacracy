import { Component } from '@angular/core';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent {
  
  // enableOptions: boolean = false; // Added property for enabling/disabling options
  enableOptions={
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false
  }
  goveranceSettings={
    marketplaceNature:'',
    marketplaceAccessType:'',
    expiryDuration:'',
    currency:'',
    inviteOneTimeUseOnly:{
      inviteAlreadyUsed:'',
      inviteMisuseAlert:''

    }

  }

  toggleOptions(): void {
    
    // console.log("1",this.goveranceSettings.expiryDuration,"----",this.enableOptions.checkbox3)
    if (!this.enableOptions.checkbox1) {
      this.goveranceSettings.marketplaceNature = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox2) {
      this.goveranceSettings.marketplaceAccessType = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox3) {
      this.goveranceSettings.expiryDuration = ''; // Reset the selected option when options are disabled
      // console.log("2",this.goveranceSettings.expiryDuration,"----",this.enableOptions.checkbox3)
    }
    if (!this.enableOptions.checkbox4) {
      this.goveranceSettings.inviteOneTimeUseOnly.inviteAlreadyUsed = '';// Reset the selected option when options are disabled 
      this.goveranceSettings.inviteOneTimeUseOnly.inviteMisuseAlert = '';// Reset the selected option when options are disabled
      // console.log("2",this.goveranceSettings.expiryDuration,"----",this.enableOptions.checkbox3)
    }

  }
 
  
  // submitAnswer(): void {
  //   console.log(this.goveranceSettings); // Log the selected answer value
  // }

  
}


