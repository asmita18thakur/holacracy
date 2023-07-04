export class Transition {
    apiType: string;
    payload: any;
    
    constructor(apiType: string) {
      this.apiType = apiType;
      this.payload = {};
    }
    
    setPayload(data: any): void {
      switch (this.apiType) {
        case 'API1':
          this.payload.param1 = data.param1;
          this.payload.param2 = data.param2;
          // Set other parameters specific to API1
          console.log(this.payload.param2)
          break;
        case 'API2':
          this.payload.paramA = data.paramA;
          this.payload.paramB = data.paramB;
          // Set other parameters specific to API2
          break;
        // Add more cases for other API types if needed
        default:
          // Handle unsupported API types
          break;
      }
    }
  }
  