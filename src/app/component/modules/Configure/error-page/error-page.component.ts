import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  selectedColor: string = '#FF508E';

  onColorPickerChange(event: Event): void {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }



}
