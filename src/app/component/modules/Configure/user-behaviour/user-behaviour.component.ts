import { Component } from '@angular/core';

@Component({
  selector: 'app-user-behaviour',
  templateUrl: './user-behaviour.component.html',
  styleUrls: ['./user-behaviour.component.scss']
})
export class UserBehaviourComponent {
  multipleDevicesList:any;
  periodList:any;
  logoutTimeList:any;
  multipleDevicesValue:string='';
  periodValue:string='';
  logOutTime:String=';'

  enableOptions={
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
    checkbox5:false,
    checkbox6:false,
    checkbox7:false,

    checkbox8:false,
    checkbox9:false,
    checkbox10:false,
    checkbox11:false,
    checkbox12:false,
    checkbox13:false
  
  
  
  }

  userBehaviour={
    TwoFAmandatory:'',
    newPasswordRules:'',
    PasswordComplexity:'',
    ForgotUsername:'',
    AllowLoginUsingOTPifPasswordIsForgotten:false,
    passwordHint:false,
    securityQuestion:false,
    trustedDevices:false,
    AbilityToAlwaysStayLoggedIn:false,
    OnlyAdminCanResetPassword:false,
    allowLoginFromMultipleDevices:'',
    ForceRequirePasswordChange:{
      ForceRequirePasswordChangeValue:'',
      ForceRequirePasswordChangeUnit:''
    },
    forceLogoutOnInactivity:{
      forceLogoutOnInactivityValue:'',
      forceLogoutOnInactivityUnit:''}
  
    

  }

  constructor() {
   
    this.multipleDevicesList = [{ key: "00", value: "0" }, { key: "01", value: "1" }, { key: "02", value: "2" }, { key: "03", value: "3" }, { key: "04", value: "4" }, { key: "05", value: "5" }, { key: "06", value: "6" }, { key: "07", value: "7" }, { key: "08", value: "8" }];
    this.periodList = [{ key: "Days", value: "Days" }, { key: "Weeks", value: "Weeks" }, { key: "Months", value: "Months" }];
    this.logoutTimeList = [{ key: "minutes", value: "minutes" }, { key: "hours", value: "hours" }, { key: "days", value: "days" },{ key: "never", value: "never" }];
  
  }


  toggleOptions(): void {
    
    // console.log("1",this.userBehaviour.expiryDuration,"----",this.enableOptions.checkbox3)
    
   

    if (!this.enableOptions.checkbox1) {
      this.userBehaviour.TwoFAmandatory = ''; // Reset the selected option when options are disabled
    }
    

    if (!this.enableOptions.checkbox2) {
      this.userBehaviour.AllowLoginUsingOTPifPasswordIsForgotten = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.AllowLoginUsingOTPifPasswordIsForgotten = this.enableOptions.checkbox2;
    }

    if (!this.enableOptions.checkbox3) {
      this.userBehaviour.passwordHint = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.passwordHint = this.enableOptions.checkbox3;
    }

    if (!this.enableOptions.checkbox4) {
      this.userBehaviour.securityQuestion = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.securityQuestion = this.enableOptions.checkbox4;
    }
   if (!this.enableOptions.checkbox5) {
      this.userBehaviour.trustedDevices = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.trustedDevices = this.enableOptions.checkbox5;
    }
    if (!this.enableOptions.checkbox6) {
      this.userBehaviour.AbilityToAlwaysStayLoggedIn = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.AbilityToAlwaysStayLoggedIn = this.enableOptions.checkbox6;
    }
    if (!this.enableOptions.checkbox7) {
      this.userBehaviour.OnlyAdminCanResetPassword = false; // Reset the selected option when options are disabled
    }else{
      this.userBehaviour.OnlyAdminCanResetPassword = this.enableOptions.checkbox7;
    }

    if (!this.enableOptions.checkbox8) {
      this.userBehaviour.newPasswordRules = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox9) {
      this.userBehaviour.PasswordComplexity = ''; // Reset the selected option when options are disabled
    }
    if (!this.enableOptions.checkbox10) {
      this.userBehaviour.ForgotUsername = ''; // Reset the selected option when options are disabled
    }
   
    if (!this.enableOptions.checkbox11) {
      this.userBehaviour.allowLoginFromMultipleDevices = ''; // Reset the selected option when options are disabled
      this.multipleDevicesValue=''
    }

    if (!this.enableOptions.checkbox12) {
      this.userBehaviour.ForceRequirePasswordChange.ForceRequirePasswordChangeUnit = ''; // Reset the selected option when options are disabled
      this.userBehaviour.ForceRequirePasswordChange.ForceRequirePasswordChangeValue = '';
      this.periodValue=''
    }

    if (!this.enableOptions.checkbox13) {
      this.userBehaviour.forceLogoutOnInactivity.forceLogoutOnInactivityUnit = ''; // Reset the selected option when options are disabled
      this.userBehaviour.forceLogoutOnInactivity.forceLogoutOnInactivityValue = '';
      this.logOutTime=''
    }
  }
  //  submitAnswer(): void {
  //   console.log(this.userBehaviour); // Log the selected answer value
  // }

selectDevices(content:string){
  this.multipleDevicesValue=content
  this.userBehaviour.allowLoginFromMultipleDevices=content
}

selectPeriod(content:string){
  this.periodValue=content
  this.userBehaviour.ForceRequirePasswordChange.ForceRequirePasswordChangeUnit=content
}
selectLogoutTime(content:string){
  this.logOutTime=content;
  this.userBehaviour.forceLogoutOnInactivity.forceLogoutOnInactivityUnit=content
}


}

