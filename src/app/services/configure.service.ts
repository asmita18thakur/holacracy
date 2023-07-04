import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {

  constructor(private http:HttpClient) { }

  //this is just a dummy service 
  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    
    const url = `${environment.weatherApi}/${environment.TenantId}/schemas/${environment.Schemas}/instances/list?size=100`;
    return this.http.get(url, httpOptions);
  }
}
