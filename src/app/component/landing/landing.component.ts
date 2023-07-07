import { Component, ElementRef, ViewChild } from '@angular/core';


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
