import { Component } from '@angular/core';

@Component({
  selector: 'app-configure-login',
  templateUrl: './configure-login.component.html',
  styleUrls: ['./configure-login.component.scss']
})
export class ConfigureLoginComponent {
  changedColor: string= '#FF508E'

  onColorChange(color: string ) {
    this.changedColor = color;



  }

}
