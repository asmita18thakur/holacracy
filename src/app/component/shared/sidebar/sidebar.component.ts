import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
// import { ApiService } from "../services/apiService";
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// import { ActivatedRoute, Router } from "@angular/router";
// import { environment } from "src/environments/environment";
import { ToastService } from "../toast-service/toast-service.service";
import { ActivatedRoute, Router } from "@angular/router";
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
  
  show: any = 'apperancesetting';
  provider: any;
  activePage:string='';
  pages = [
    { pagename: 'apperancesetting', status: false },
    { pagename: 'storefront', status: false },
    { pagename: 'holacracy', status: false },
    { pagename: 'message', status: false },
    { pagename: 'configure', status: false },
    { pagename: 'moscribe', status: false },
    { pagename: 'products', status: false },
    { pagename: 'catalogue', status: false },
    { pagename: 'ratecard', status: false },
    { pagename: 'superdashboard', status: false }

  ];  constructor(
    // private apiService: ApiService,
    private router: Router,
    private toastService: ToastService,
    // private pubSub: PubsubService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
   
    let sideTabClicked = this.activeRoute.snapshot.params['type'] ? this.activeRoute.snapshot.params['type'] : 'apperancesetting';
    // this.navigateTo(sideTabClicked);
  }

  ngOnInit(){
    let obj:any = this.activeRoute;
    let arr = obj['_routerState']['snapshot'].url.split('/;')
    let pagename=arr[0].split('/')[1]
    console.log(pagename);
    if (pagename) {
          this.show = pagename;
    }
    // this.activeRoute.paramMap.subscribe(params => {
    //   const pagename = params.get('pagename');
    //   
    // });
    console.log(this.show)
  }

  navigateTo(page:any):void{
    this.show=page
    this.activePage=page
    this.router.navigate([page])
  }
 
  handleToggle(pagename: string) {
      this.show=pagename;
      this.pages = this.pages.map(page => {
        if (page.pagename == pagename) {
          return { ...page, status: true };
        } else {
          return { ...page, status: false };
        }
      });
      console.log(this.pages)
    }
 


  handleSidebarToggle = () => this.isExpanded = true;
  handleSidebarToggleOut = () => this.isExpanded = false;


  changeColor(pagename:any) {
    return this.show == pagename;
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
