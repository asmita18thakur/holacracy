import { Component } from '@angular/core';

@Component({
  selector: 'app-tenant-behaviour',
  templateUrl: './tenant-behaviour.component.html',
  styleUrls: ['./tenant-behaviour.component.scss']
})
export class TenantBehaviourComponent {
  // enableOptions: boolean = false; // Added property for enabling/disabling options
  enableOptions={
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
  
  }
  tenantBehaviour={
    AllowTenantsToCommunicateWithEachOtherOutsideOfAlliance:false,
    AllowTenantsToAddNewParticipantsToOrganisation:'',
    KindsOfTenantsAllowedToMarketplace:'',
    

  }

  toggleOptions(): void {
    
    // console.log("1",this.tenantBehaviour.expiryDuration,"----",this.enableOptions.checkbox3)
    
    if (!this.enableOptions.checkbox1) {
      this.tenantBehaviour.AllowTenantsToCommunicateWithEachOtherOutsideOfAlliance = false; // Reset the selected option when options are disabled
    }else{
      this.tenantBehaviour.AllowTenantsToCommunicateWithEachOtherOutsideOfAlliance = this.enableOptions.checkbox1;
    }


    if (!this.enableOptions.checkbox2) {
      this.tenantBehaviour.AllowTenantsToAddNewParticipantsToOrganisation = ''; // Reset the selected option when options are disabled
    }

    if (!this.enableOptions.checkbox3) {
      this.tenantBehaviour.KindsOfTenantsAllowedToMarketplace = ''; // Reset the selected option when options are disabled
    }
   
   
  }

  //   submitAnswer(): void {
  //   console.log(this.tenantBehaviour); // Log the selected answer value
  // }
}
