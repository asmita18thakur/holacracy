import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataArray: string[] = ["Next","Save"];
  public rightVisibility:boolean = false

  constructor() { }


  // Add data to the array
  changeData(data: any[]): void {
    this.dataArray = data;
  }

  // Get all the data in the array
  getAllData(): any[] {
    return this.dataArray;
  }

  // Clear the data array
  clearData(): void {
    this.dataArray = [];
  }

  

  changeSideBarVisibility(data:string){
    console.log(data)
    switch(data){
      case "ratecard": {this.rightVisibility=false;
                          break;
                        }
      case "configure": {this.rightVisibility=true;
                          break;
                        }
    
    
      default: break;
    }
    console.log(this.rightVisibility)
  }



}
