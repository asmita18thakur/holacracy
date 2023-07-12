import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table-simple-row',
  templateUrl: './table-simple-row.component.html',
  styleUrls: ['./table-simple-row.component.scss']
})
export class TableSimpleRowComponent {
  @Input() item: any;
}



// {userProfilePic:'../../../../../assets/images/myOrganisation/Avatar.png',
// userName:'tulika ',
// login:'@tulip',
// role:'User',
// read:'Yes',
// write:'Yes',
// execute:'Yes'}