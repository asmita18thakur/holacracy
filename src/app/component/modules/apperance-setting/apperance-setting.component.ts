import { Component } from '@angular/core';
import { card2,card2_01 } from 'src/app/contants/temp';

@Component({
  selector: 'app-apperance-setting',
  templateUrl: './apperance-setting.component.html',
  styleUrls: ['./apperance-setting.component.scss']
})
export class ApperanceSettingComponent {
  cards: any[] = card2;
  cards_2:any[]=card2_01

  constructor(){

  }
   
}
