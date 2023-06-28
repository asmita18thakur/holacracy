import { Component } from '@angular/core';
import { card } from 'src/app/contants/temp';

@Component({
  selector: 'app-apperance-setting',
  templateUrl: './apperance-setting.component.html',
  styleUrls: ['./apperance-setting.component.scss']
})
export class ApperanceSettingComponent {
  cards: any[] = card;

  constructor(){

  }
   
}
