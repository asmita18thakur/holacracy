import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'data.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  sidebarExpanded = true;
  width = 100;
  isAsideExpanded: boolean = false;
  contentHeight = 200; 
  @ViewChild('graphComponent', { static: false }) graphElement!:ElementRef;
  
  constructor(
    // public pubSubSvc: PubsubService,
    public data:DataService

    ) { }
  
    ngOnInit() {
      
    }
  
    

    shrinkMainContainer() {
      this.isAsideExpanded = !this.isAsideExpanded;
      // this.pubSubSvc.toggleAsideBarFlag =  this.isAsideExpanded;
      //  this.pubSubSvc.toggleAsideBar.next(this.isAsideExpanded);
    }
  
    onDragEnd(event: any): void {
      this.contentHeight += event?.distance?.y; // Update the content height based on the drag distance
    }
  
}
