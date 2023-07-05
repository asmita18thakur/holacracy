import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
// import { ApiService } from "../services/apiService";
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute, Router } from "@angular/router";
// import { environment } from "src/environments/environment";
import { ToastService } from "../toast-service/toast-service.service";
// import { PubsubService } from "../services/pubSub";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerColorChanged: Subject<string> = new Subject<string>();
  show: any = "universe";
  provider: any;
  activePage:string='';
  constructs = ['configure', 'apperance', 'analytics', 'charts', 'contexts', 'engagements', 'ingestions', 'dashboard']
  constructor(
    // private apiService: ApiService,
    private router: Router,
    private toastService: ToastService,
    // private pubSub: PubsubService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
   

    let sideTabClicked = this.activeRoute.snapshot.params['type'] ? this.activeRoute.snapshot.params['type'] : 'universe';
    this.navigateTo(sideTabClicked);
  }
  navigateTo(page:any):void{
    this.activePage=page
    this.router.navigate([page]);
  }
 

 


  handleSidebarToggle = () => this.isExpanded = true;
  handleSidebarToggleOut = () => this.isExpanded = false;


  changeColor(color:any) {
    return this.show == color;
  }

 
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.toastService.showSuccessToast('Success', 'Logout Success');
    this.router.navigate(['/login']);
  }

  onHeaderColorChange(query: any) {
    this.headerColorChanged.next(query);
  }

  // settingPopupFun() {
  //   this.settingPopup = true;
  // }
  navBack() {
    localStorage.removeItem('universeName')
  }
}
