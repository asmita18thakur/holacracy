import { Component } from '@angular/core';

@Component({
  selector: 'app-genereal-bussiness-info',
  templateUrl: './genereal-bussiness-info.component.html',
  styleUrls: ['./genereal-bussiness-info.component.scss']
})
export class GenerealBussinessInfoComponent {
  LegalBussinessName:string='';
  OrganisationLogo:string='';
  BusinessRegNumber:string='';
  BusinessAddress:string='';
  PostalCode:string='';
  ContactNumber:string='';
  Emailaddress:string='';
  CIKKey:string='';
  CrunchbaseURL:string='';
  NationalBBBID:string='';
  RegionalBBBID:string='';



  constructor(){

  }
}
