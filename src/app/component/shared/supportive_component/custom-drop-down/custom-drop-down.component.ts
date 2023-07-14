import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss']
})
export class CustomDropDownComponent {
  //============custom dropdown
  isOpen = false;

  @Input() item:any;

  // selectedOption: string='';
  // options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private formBuilder: FormBuilder) {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.item.selectedOption = option;
    this.isOpen = false;
  }
}
