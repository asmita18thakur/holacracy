import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-rate-card-configuration',
  templateUrl: './rate-card-configuration.component.html',
  styleUrls: ['./rate-card-configuration.component.scss']
})
export class RateCardConfigurationComponent {
  selectedWord: string = '#4D45A3';
  onColorChange(color: string) {
    this.selectedWord = color;
  }
  @Input() paragraphColor: string="#1D3159";
  selected="first"
  changer(data:string){
    this.selected = data
    console.log(data)
  }







}
