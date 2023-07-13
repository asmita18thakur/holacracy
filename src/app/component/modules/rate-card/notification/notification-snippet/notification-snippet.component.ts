import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-notification-snippet',
  templateUrl: './notification-snippet.component.html',
  styleUrls: ['./notification-snippet.component.scss']
})
export class NotificationSnippetComponent {



@Input() Username ="";
@Input() Product = "";
@Input() Time_info = "";
@Input() number = ""
@Input() state = "";
@Input() data = "";



}
