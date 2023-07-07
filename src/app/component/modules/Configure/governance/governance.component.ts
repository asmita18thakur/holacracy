import { Component } from '@angular/core';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent {
  checkboxValue1: boolean = false;
  checkboxValue2 = false;
  checkboxValue3 = false;
  checkboxValue4 = false;
  checkboxValue5 = false;
  checkboxValue6 = false;

  radioValue1: string = '';
  radioValue2: string = '';
  radioValue3: string = '';

  handleCheckboxChange(): void {
    if (!this.checkboxValue1) {
      this.radioValue1 = ''; // Reset the radio button selection when checkbox is unchecked
    }else if (!this.checkboxValue2) {
      this.radioValue2 = ''; // Reset the radio button selection when checkbox is unchecked
    }else if (!this.checkboxValue3) {
      this.radioValue3 = ''; // Reset the radio button selection when checkbox is unchecked
    }
    // else if (!this.checkboxValue4) {
    //   this.checkboxValue4 = true; // Reset the radio button selection when checkbox is unchecked
    // }
    // else if (!this.checkboxValue5) {
    //   this.checkboxValue5 = true; // Reset the radio button selection when checkbox is unchecked
    // }
    // else if (!this.checkboxValue6) {
    //   this.checkboxValue6 = true; // Reset the radio button selection when checkbox is unchecked
    // }
  }
}


