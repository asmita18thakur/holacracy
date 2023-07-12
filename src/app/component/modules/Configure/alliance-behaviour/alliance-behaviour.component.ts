import { Component } from '@angular/core';

@Component({
  selector: 'app-alliance-behaviour',
  templateUrl: './alliance-behaviour.component.html',
  styleUrls: ['./alliance-behaviour.component.scss']
})
export class AllianceBehaviourComponent {
  enableOptions={
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false
 
  }
  allianceBehaviour={
    coolDownPeriodAfterAlliance:'',
    AllianceFormationRequiresOperatorApproval:'',
    RequireApprovalToExitAlliance:'',
    currency:'',
    inviteOneTimeUseOnly:{
      inviteAlreadyUsed:'',
      inviteMisuseAlert:'' },
    allianceDissolver:""

  }

  toggleOptions(): void {
    
    // console.log("1",this.allianceBehaviour.RequireApprovalToExitAlliance,"----",this.enableOptions.checkbox3)
    if (!this.enableOptions.checkbox1) {
      this.allianceBehaviour.coolDownPeriodAfterAlliance = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox2) {
      this.allianceBehaviour.AllianceFormationRequiresOperatorApproval = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox3) {
      this.allianceBehaviour.RequireApprovalToExitAlliance = ''; // Reset the selected option when options are disabled
      // console.log("2",this.allianceBehaviour.RequireApprovalToExitAlliance,"----",this.enableOptions.checkbox3)
    }
    if (!this.enableOptions.checkbox4) {
      this.allianceBehaviour.allianceDissolver = ''; // Reset the selected option when options are disabled
      // console.log("2",this.allianceBehaviour.RequireApprovalToExitAlliance,"----",this.enableOptions.checkbox3)
    }

  }
 
  
  submitAnswer(): void {
    console.log(this.allianceBehaviour); // Log the selected answer value
  }

}
