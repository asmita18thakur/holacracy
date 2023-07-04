import { Component,AfterViewInit,ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { card2,card2_01 } from 'src/app/contants/temp';

@Component({
  selector: 'app-apperance-setting',
  templateUrl: './apperance-setting.component.html',
  styleUrls: ['./apperance-setting.component.scss']
})
export class ApperanceSettingComponent {
  cards: any[] =card2;
  cards_2:any[]=card2_01

  activeSection: string="";
  @ViewChild('containerElement', { static: true })  containerRef:any= ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.activeSection='section1';
    
  }

  ngAfterViewInit() {
    this.scrollToStart();
  }

  scrollToStart() {
    const container = this.containerRef.nativeElement;
    container.scrollLeft = 0;
  }

 

  //sidebar text highlight when scroll 
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = this.elementRef.nativeElement.querySelectorAll('section[id^="section"]');

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight ) {
        this.activeSection = section.id;
        break;
      }
    }
    console.log(this.activeSection)
  }

  isSectionActive(sectionId: string) {
    return this.activeSection === sectionId;
  }

}
   

