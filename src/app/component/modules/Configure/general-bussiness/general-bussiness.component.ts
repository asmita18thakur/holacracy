import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transition } from 'src/app/component/shared/transition/transition';


@Component({
  selector: 'app-general-bussiness',
  templateUrl: './general-bussiness.component.html',
  styleUrls: ['./general-bussiness.component.scss']
})
export class GeneralBussinessComponent {
  HolacracyName:string='';
  HolacracyUrl:string='';
  Marketplacedesc:string='';
  Tags:string='';
  Mission:string='';
  vision:string='';
  Resources:string='';
  SubcatList:any;

  transition:any=Transition;
  constructor() {
    this.transition = new Transition('API1');
    this.SubcatList = [{ key: "ADVERTISING", value: "Advertising" }, { key: "BROADCAST_CHAIN", value: "Broadcast Chain" }, { key: "TRAFFIC_SYSTEMS", value: "Traffic Systems" }, { key: "AUDIENCE_MEASUREMENT", value: "Audience Measurement" }, { key: "OTT", value: "OTT" }, { key: "NEWS", value: "News" }, { key: "OTA", value: "OTA" }, { key: "UX", value: "UX" }, { key: "ANALYTICS", value: "Analytics" }, { key: "ENCODERS", value: "Encoders" }, { key: "CMS", value: "CMS" }, { key: "RADIO", value: "Radio" }, { key: "ALERTING", value: "Alerting" }, { key: "APP", value: "APP" }, { key: "TELCO", value: "Telco" }, { key: "SMART_CITIES", value: "Smart Cities" }, { key: "AUTOMOTIVE", value: "Automotive" }, { key: "METADATA", value: "Metadata" }, { key: "NEXTGEN_TV", value: "NextGen TV" }, { key: "EDUCATION", value: "Education" }, { key: "COMMUNITY_TV", value: "Community TV" }, { key: "SDN_NFV", value: "SDN/NFV" }, { key: "SPECTRUM_AGGREGATION", value: "Spectrum Aggregation" }, { key: "BROADCASTER_APP", value: "BA" }];

  }

  ngOnInit(){

  }
  submit(){
    this.transition.setPayload({
      param1:this.HolacracyName,
      param2:this.HolacracyUrl,
      'Marketplacedesc':this.Marketplacedesc,
      'Tags':this.Tags,
      'Mission':this.Mission,
      'vision':this.vision,
      'Resources':this.Resources
    })
   
  }

}
