import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent {
  selectedColor: string = '#FF508E';


  @Output() colorChange = new EventEmitter<string>();

  onColorChange() {
    this.colorChange.emit(this.selectedColor);
  }
}
