import { Component } from '@angular/core';

@Component({
  selector: 'app-apperance',
  templateUrl: './apperance.component.html',
  styleUrls: ['./apperance.component.scss']
})
export class ApperanceComponent {
  multipleDevicesList:any;
  multipleFontFamily:any;
  selectedColor1:String="#9E1F9D";
  selectedColor2:String="#3477CA";
  selectedColor3:String="#FFFFFF"
  selectedColor4:String= "#2C2C2C"
  selectedImage: string="";

  selectImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }


  constructor() {

    this.multipleDevicesList = [{ key: "00", value: "Arial" }, { key: "01", value: "Times New Roman" }, { key: "02", value: "Verdana" }, { key: "03", value: "Helvetica" }, { key: "04", value: "Georgia" }, { key: "05", value: "Courier New" }, { key: "06", value: "Comic Sana MS" }];
    this.multipleFontFamily=[{key:"00",value:"Open Sans"},{key:"01",value:"Montserrat"},{key:"02",value:"Pacifico"},{key:"03",value:"Playfair Display"},{key:"04",value:"Raleway"},{key:"05",value:"Lobster"},{key:"06",value:"Merriweather"}]


  }

  multipleDevicesValue:string='Lato';
  multipleFontFamilyValue:string='Roboto';


  userBehaviour={
    allowLoginFromMultipleDevices:''
  }




      selectDevices(content:string){
      this.multipleDevicesValue=content
      }

      selectFontFamily(content:string){
        this.multipleFontFamilyValue=content
      }

      enableOptions={
        checkbox1:false,
        checkbox2:true,

      }

      toggleOptions(): void {

}



}
