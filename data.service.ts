import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataArray: string[] = ["Next","Save"];

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
}
