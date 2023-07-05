import { Component } from '@angular/core';

@Component({
  selector: 'app-configure-login',
  templateUrl: './configure-login.component.html',
  styleUrls: ['./configure-login.component.scss']
})
export class ConfigureLoginComponent {
  selectedColor: string = '#FF508E';

  onColorPickerChange(event: Event): void {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }

}
